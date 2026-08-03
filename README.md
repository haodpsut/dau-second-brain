# Rà soát Văn bản: bản demo tĩnh (gửi trường)

Web **tĩnh hoàn toàn** (chỉ `index.html` + `data.js`), không cần backend, không cần cơ sở dữ liệu.
Tái hiện phần giá trị của DocOps: **26 văn bản của trường đang viện dẫn căn cứ pháp lý đã hết hiệu lực**,
gộp theo **10 lần luật thay đổi**, kèm **đồ thị tác động**. Dữ liệu trích từ rà soát thực tế.

Nền trắng + nhấn xanh dương (đồng bộ hệ thống của trường). Trung tính, không gắn thương hiệu.

## Xem thử tại máy
Mở thẳng `index.html` bằng trình duyệt (nhấp đúp), chạy ngay, không cần cài gì.

## Đưa lên mạng cho trường xem (GitHub cá nhân → Vercel)
1. Tạo repo mới trên **GitHub cá nhân** (không phải tài khoản công ty), ví dụ `ra-soat-van-ban-demo`.
2. Đẩy 3 file này lên: `index.html`, `data.js`, `README.md`.
   ```bash
   cd docops-demo-truong
   git init && git add . && git commit -m "demo ra soat van ban"
   git branch -M main
   git remote add origin https://github.com/<tài-khoản-cá-nhân>/ra-soat-van-ban-demo.git
   git push -u origin main
   ```
3. Vào https://vercel.com → **Add New Project** → chọn repo vừa đẩy → **Deploy**.
   Vercel tự nhận là site tĩnh, không cần cấu hình. Có link `https://<tên>.vercel.app` để gửi trường.

> Không cần `vercel.json` hay build step. Vercel phục vụ trực tiếp `index.html`.

## Cổng đăng nhập (mã hoá)
Trang có cổng mật khẩu dùng chung. Dữ liệu **được mã hoá** thành `data.enc` (AES-GCM +
PBKDF2); trình duyệt chỉ giải mã được khi nhập đúng mật khẩu. Repo **không** chứa dữ liệu
thô và **không** chứa mật khẩu.

- File thô `data.js` để **cục bộ** (đã gitignore), chỉ dùng để sinh lại `data.enc`.
- **Đổi mật khẩu:** chạy `PASSWORD='mật-khẩu-mới' node encrypt-data.mjs` (sinh lại `data.enc`) rồi push.
- Cổng chạy được trên `https://` hoặc `localhost` (Web Crypto yêu cầu ngữ cảnh an toàn).

> Lưu ý: đây là cổng dùng chung, không phải hệ tài khoản. Ai có mật khẩu đều xem được.

## Cập nhật dữ liệu
`data.js` (cục bộ) sinh từ kết quả rà soát thật. Đổi số liệu thì cập nhật `data.js`, chạy lại
`encrypt-data.mjs`, rồi push `data.enc`.

## Ghi chú
- Không thu thập dữ liệu người dùng; toàn bộ chạy trong trình duyệt.
- Đây là bản trình bày; bản đầy đủ (nhập kho văn bản của trường, rà tự động, on-prem) là hệ thống có backend riêng.
