# Tài Liệu Hệ Thống Hụi Việt (Hụi Việt Documentation System)

Trang tài liệu hướng dẫn sử dụng và bàn giao hệ thống Zalo Mini App Hụi Việt (Sổ Tay Kỳ Khui Tự Động).

## 1. Cấu trúc thư mục
```text
huiviet-docs/
├── .nojekyll                  # File cấu hình để GitHub Pages không bỏ qua các tài nguyên tĩnh
├── index.html                 # Trang tài liệu chính (HTML5 + Tailwind CSS + Hỗ trợ Dark Mode)
├── style.css                  # Định dạng giao diện tùy biến (Khung điện thoại, Lightbox, Dark Mode, In ấn)
├── script.js                  # Xử lý tương tác (Chế độ Sáng/Tối, Lọc vai trò, Tìm kiếm, Phóng to ảnh, Sao chép)
├── README.md                  # Hướng dẫn vận hành và xuất bản trang
└── assets/
    └── images/                # Thư mục lưu trữ 10 ảnh chụp màn hình giao diện thực tế
        ├── screen-01-tong-quan-chu-hui.jpg
        ├── screen-02-tao-day-hui-moi.jpg
        ├── screen-03-quan-ly-thanh-vien-chan-hui.jpg
        ├── screen-04-tao-gui-lien-ket-moi.jpg
        ├── screen-05-theo-doi-phien-khui.jpg
        ├── screen-06-lich-khui-ket-qua.jpg
        ├── screen-07-tong-quan-hui-vien.jpg
        ├── screen-08-loi-moi-tham-gia.jpg
        ├── screen-09-dat-muc-bo-tham.jpg
        └── screen-10-bien-nhan-doi-soat-khu-an.jpg
```

## 2. Tính năng nổi bật của Trang Tài liệu
- **Hỗ trợ chế độ Sáng / Tối (Dark Mode):** Nút chuyển đổi giao diện đặt tại thanh điều hướng trên cùng, tự động nhận diện chế độ hệ điều hành và lưu trạng thái vào trình duyệt (`localStorage`).
- **Phân tách vai trò rõ ràng:** Bộ lọc chuyển nhanh giữa góc nhìn của Chủ hụi (Quản trị viên) và Hụi viên (Khách hàng tham gia).
- **Tìm kiếm thời gian thực:** Tra cứu tức thì các thuật ngữ nghiệp vụ, quy tắc tính tiền và hướng dẫn sử dụng.
- **Xem ảnh chụp kích thước lớn (Fullscreen Zoom):** Nhấp vào bất kỳ ảnh chụp màn hình nào để mở khung phóng to chi tiết.
- **Yêu cầu kết nối Zalo rõ ràng:** Nêu rõ điều kiện chuẩn bị về tài khoản Zalo OA và quyền Zalo Mini App bằng ngôn từ dễ hiểu cho khách hàng.

## 3. Xem trước tài liệu trên máy (Local Preview)
Do trang được thiết kế hoàn toàn bằng Web tĩnh không cần cài đặt Node.js hay build:
- Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).
- Hoặc khởi chạy web server nhẹ:
  ```powershell
  # Dùng Python
  python -m http.server 8080

  # Hoặc dùng npx serve
  npx serve .
  ```
  Sau đó truy cập `http://localhost:8080`.

## 4. Danh mục 10 ảnh chụp màn hình giao diện thực tế
Toàn bộ 10 ảnh chụp màn hình tiêu chuẩn đã được tích hợp đầy đủ trong thư mục `assets/images/`:
1. `screen-01-tong-quan-chu-hui.jpg`: Trang tổng quan Chủ hụi
2. `screen-02-tao-day-hui-moi.jpg`: Biểu mẫu tạo và cấu hình dây hụi
3. `screen-03-quan-ly-thanh-vien-chan-hui.jpg`: Danh bạ bảo mật và phân bổ chân
4. `screen-04-tao-gui-lien-ket-moi.jpg`: Tạo và gửi liên kết mời nhận chân qua Zalo
5. `screen-05-theo-doi-phien-khui.jpg`: Theo dõi phiên khui trực tiếp thời gian thực
6. `screen-06-lich-khui-ket-qua.jpg`: Lịch khui các kỳ và kết quả chốt sổ
7. `screen-07-tong-quan-hui-vien.jpg`: Trang tổng quan Hụi viên
8. `screen-08-loi-moi-tham-gia.jpg`: Thẻ thông tin lời mời tham gia dây hụi
9. `screen-09-dat-muc-bo-tham.jpg`: Giao diện đặt mức bỏ thăm kín
10. `screen-10-bien-nhan-doi-soat-khu-an.jpg`: Bảng tính tiền đối soát và biên nhận kết quả

## 5. Hướng dẫn đẩy lên GitHub và kích hoạt GitHub Pages
Khi bạn tạo một repository mới trên GitHub (ví dụ: `huiviet-docs`), chạy các lệnh sau tại thư mục này:

```powershell
cd d:\Workplace\Project\huiviet-docs
git init
git add .
git commit -m "Khoi tao tai lieu he thong Hui Viet"
git branch -M main
git remote add origin https://github.com/[TEN_TAI_KHOAN]/huiviet-docs.git
git push -u origin main
```

Sau khi đẩy mã nguồn lên GitHub:
1. Vào mục **Settings** của repository trên GitHub.
2. Chọn **Pages** ở cột menu bên trái.
3. Chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
4. Trang web sẽ được phát hành trực tiếp tại: `https://[TEN_TAI_KHOAN].github.io/huiviet-docs/`.
