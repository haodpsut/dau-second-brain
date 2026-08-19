# Rà soát Văn bản: bản demo tĩnh (gửi trường)

Web **tĩnh hoàn toàn** (chỉ `index.html` + `data.js`), không cần backend, không cần cơ sở dữ liệu.
Tái hiện phần giá trị của DocOps: **26 văn bản của trường đang viện dẫn căn cứ pháp lý đã hết hiệu lực**,
gộp theo **10 lần luật thay đổi**, kèm **đồ thị tác động**. Dữ liệu trích từ rà soát thực tế.

Nền trắng + nhấn đỏ maroon (đồng bộ logo và website của trường).

## Bản cập nhật 19/08/2026: nạp thêm văn bản mới nhất của Bộ

Đã bóc tách **18 văn bản pháp quy công khai** (Bộ GDĐT, Chính phủ, Quốc hội, Bộ TTTT; đợt 2024 tới 2026)
tới mức **điều khoản**, và nối vào kho văn bản của trường.

Con số sau khi nạp:

| Khối | Số lượng |
|---|---|
| Văn bản Bộ đã bóc | 18 |
| Điều khoản | 421 |
| Nghĩa vụ | 297 |
| Con số chốt (ngưỡng, tỉ lệ, thời hạn) | 354 |
| Lần đổi hiệu lực có kèm nguyên văn | 45 |
| Mốc thời hạn | 42 |
| Bản ghi tra cứu được | 137 (119 của trường + 18 của Bộ) |

**Phát hiện đáng kể nhất:** 5 văn bản trong kho không chỉ *viện dẫn* căn cứ đã chết mà **chính chúng đã
hết hiệu lực toàn bộ**: TT 17/2021, TT 35/2021, TT 02/2022 (đều bị TT 54/2026 thay thế), TT 08/2021
(bị TT 56/2026 thay thế) và QĐ 1982/QĐ-TTg (bị QĐ 39/2026/QĐ-TTg thay thế).

### Các mục mới trên trang

- **Chính văn bản đã bị khai tử**: mức nghiêm trọng hơn mục cảnh báo cũ.
- **Hạn chót và mốc chưa tới**: dòng thời gian, đánh dấu mốc đã qua và mốc còn dưới 120 ngày.
- **Tra cứu kho văn bản**: tìm không dấu, lọc theo nguồn và theo loại, tô vàng đoạn khớp.
- **Việc phải làm**: 297 nghĩa vụ, lọc theo văn bản và theo loại việc.
- **Sổ tra ngưỡng**: 354 con số định lượng.
- **Mọi lần đổi hiệu lực**: 45 lần, mỗi lần kèm nguyên văn điều khoản.
- **Chỗ hệ thống chưa biết**: khai thẳng giới hạn của bản demo.
- **Ô chi tiết** nay hiển thị được văn bản Bộ ở mức điều khoản, nghĩa vụ và con số.

### Nguyên tắc dữ liệu

Mọi khẳng định có hậu quả pháp lý (thay thế, bãi bỏ, ngày hiệu lực, hạn chót) đều lưu kèm
**nguyên văn** câu trong văn bản gốc, mở ra được ngay trên giao diện. Con số do **tính ra**
(ví dụ "36 tháng kể từ ngày có hiệu lực") được đánh dấu tách khỏi con số **chép nguyên**.

### Giới hạn đã biết

- Hệ thống khai tổng kho 181 văn bản nhưng chỉ 119 có bản trích xuất; 62 văn bản còn lại không tra được.
- 93 văn bản có bản ghi nhưng chưa bóc danh sách căn cứ, nên nếu chúng đang viện dẫn căn cứ đã chết
  thì hệ thống cũng chưa biết.
- 7 căn cứ đã chết chưa tìm được văn bản thay trong lô 18 văn bản này (NĐ 99/2019, NĐ 86/2022,
  QĐ 42/2007, QĐ 43/2007, TT 57/2012).
- TT 65/2026 đọc từ bản scan qua OCR. Ngày hiệu lực đã đọc lại bằng mắt trên ảnh trang gốc
  (26/9/2026); vẫn nên đối chiếu Công báo trước khi dùng cho việc có hậu quả pháp lý.
- Phụ lục hướng dẫn đánh giá của hai thông tư kiểm định là bảng nhiều cột, công cụ bóc trộn chữ
  giữa các cột nên không lấy nguyên văn từ vùng đó.

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
