"""
HTML 페이지를 비밀번호로 AES 암호화하는 스크립트.
원본 HTML의 <body> 내용을 암호화하고, 비밀번호 입력 UI로 교체한다.
"""
import sys, os, json, base64, hashlib
from pathlib import Path

try:
    from Crypto.Cipher import AES
    from Crypto.Util.Padding import pad
except ImportError:
    from Cryptodome.Cipher import AES
    from Cryptodome.Util.Padding import pad


def encrypt_html(filepath, password):
    filepath = Path(filepath)
    html = filepath.read_text(encoding='utf-8')

    # <body ...> 와 </body> 사이의 내용 추출
    body_start = html.find('<body')
    body_tag_end = html.find('>', body_start) + 1
    body_close = html.rfind('</body>')

    body_content = html[body_tag_end:body_close]

    # AES-256-CBC 암호화
    key = hashlib.sha256(password.encode('utf-8')).digest()
    iv = os.urandom(16)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    encrypted = cipher.encrypt(pad(body_content.encode('utf-8'), AES.block_size))

    # base64 인코딩
    payload = base64.b64encode(iv + encrypted).decode('ascii')

    # 비밀번호 입력 UI + 복호화 로직으로 교체
    new_body = f'''
<div id="lock-screen" style="
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  min-height:100vh; background:linear-gradient(135deg,#0f172a,#1e293b); font-family:'Noto Sans KR',sans-serif;
">
  <div style="text-align:center; color:#fff; margin-bottom:32px;">
    <div style="font-size:2rem; font-weight:900; margin-bottom:8px;">StockDigging</div>
    <div style="color:#94a3b8; font-size:0.95rem;">이 문서는 비밀번호로 보호되어 있습니다</div>
  </div>
  <div style="background:#1e293b; border:1px solid #334155; border-radius:12px; padding:32px; width:340px;">
    <input id="pw-input" type="password" placeholder="비밀번호 입력"
      style="width:100%; padding:12px 16px; border:1px solid #475569; border-radius:8px;
             background:#0f172a; color:#fff; font-size:1rem; outline:none; margin-bottom:12px;"
      onkeydown="if(event.key==='Enter')decrypt()">
    <button onclick="decrypt()"
      style="width:100%; padding:12px; background:#3b82f6; color:#fff; border:none;
             border-radius:8px; font-size:1rem; font-weight:700; cursor:pointer;">
      열기
    </button>
    <div id="pw-error" style="color:#ef4444; font-size:0.85rem; margin-top:8px; text-align:center; display:none;">
      비밀번호가 틀렸습니다
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>
<script>
const PAYLOAD = "{payload}";

function decrypt() {{
  const pw = document.getElementById('pw-input').value;
  try {{
    const raw = atob(PAYLOAD);
    const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);

    const iv = CryptoJS.lib.WordArray.create(bytes.slice(0, 16));
    const ct = CryptoJS.lib.WordArray.create(bytes.slice(16));
    const key = CryptoJS.SHA256(pw);

    const decrypted = CryptoJS.AES.decrypt(
      {{ ciphertext: ct }}, key, {{ iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }}
    );

    const text = decrypted.toString(CryptoJS.enc.Utf8);
    if (!text || text.length < 10) throw new Error('bad');

    document.getElementById('lock-screen').remove();
    document.body.innerHTML = text;

    // nav.js 재실행
    const s = document.createElement('script');
    s.src = '/nav.js';
    document.body.appendChild(s);
  }} catch(e) {{
    document.getElementById('pw-error').style.display = 'block';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
  }}
}}
document.addEventListener('DOMContentLoaded', () => document.getElementById('pw-input').focus());
</script>
'''

    new_html = html[:body_tag_end] + new_body + html[body_close:]

    # 백업 원본
    backup = filepath.with_suffix('.original.html')
    filepath.rename(backup)
    filepath.write_text(new_html, encoding='utf-8')

    print(f"암호화 완료: {filepath}")
    print(f"원본 백업: {backup}")
    print(f"암호문 길이: {len(payload)} chars")


if __name__ == '__main__':
    encrypt_html(
        'docs/stockdigging/ir.html',
        'song_240408'
    )
