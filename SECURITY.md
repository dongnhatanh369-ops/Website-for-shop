# Kiến trúc bảo mật — DNA Hobby Store

Tài liệu này định nghĩa ranh giới bảo mật giữa frontend và backend. Website hiện tại là frontend demo; không có cơ chế phía trình duyệt nào thay thế được xác thực, phân quyền và kiểm tra dữ liệu tại server.

## Vai trò và quyền

| Vai trò | Quyền tối thiểu |
| --- | --- |
| Khách | Xem/tìm sản phẩm, quản lý giỏ cục bộ, gửi yêu cầu đặt hàng |
| Khách hàng | Quyền của Khách, xem hồ sơ và đơn hàng của chính mình |
| Nhân viên | Xem/cập nhật đơn được giao; không quản lý tài khoản quản trị |
| Quản trị viên | Quản lý sản phẩm, tồn kho, đơn hàng và nhân viên |

Backend phải kiểm tra quyền ở từng endpoint. Ẩn nút trên frontend không phải là phân quyền.

## Ranh giới dữ liệu

Frontend chỉ lưu ID và số lượng sản phẩm trong `localStorage`. Không lưu mật khẩu, token dài hạn, khóa API, số thẻ, CVV, secret backend hoặc hồ sơ khách hàng.

## Hợp đồng API dự kiến

| Method | Endpoint | Quyền | Mục đích |
| --- | --- | --- | --- |
| GET | `/api/products` | Công khai | Danh sách, tìm kiếm, lọc và phân trang |
| GET | `/api/products/:id` | Công khai | Chi tiết sản phẩm |
| POST | `/api/orders` | Khách/Khách hàng | Tạo đơn; server tính lại giá và tồn kho |
| GET | `/api/orders/:id` | Chủ đơn/Nhân viên | Xem đơn đúng phạm vi quyền |
| POST | `/api/auth/login` | Công khai | Đăng nhập và tạo session an toàn |
| POST | `/api/auth/logout` | Đã đăng nhập | Hủy session |
| POST/PATCH | `/api/admin/products` | Quản trị viên | Quản lý catalog và tồn kho |

Frontend không gửi hoặc tin cậy tổng tiền tự tính. Backend phải đọc giá hiện tại từ database và trả tổng tiền chính thức.

## Yêu cầu backend bắt buộc

- HTTPS trong production; hash mật khẩu bằng Argon2id hoặc bcrypt.
- Cookie phiên `HttpOnly`, `Secure`, `SameSite` và bảo vệ CSRF phù hợp.
- Validate theo allowlist mọi body, query và path parameter.
- Kiểm tra quyền theo tài nguyên để tránh truy cập đơn/hồ sơ của người khác.
- Rate limit đăng nhập, khôi phục mật khẩu, tìm kiếm và tạo đơn.
- Không trả stack trace hoặc secret; audit log thao tác quản trị.
- Quản lý secret ngoài Git; có backup và quy trình xử lý sự cố.

## Yêu cầu frontend bắt buộc

- Escape dữ liệu API; không chèn HTML không tin cậy.
- Không dùng `eval`, inline script hoặc lưu dữ liệu nhạy cảm.
- Giữ Content Security Policy và security headers khi triển khai.
- Giới hạn đầu vào để hỗ trợ UX; backend vẫn phải validate lại.
- Không ghi dữ liệu cá nhân hoặc nội dung checkout vào console.
- Dùng ảnh dự phòng nội bộ khi ảnh sản phẩm lỗi.

## Luồng tạo đơn an toàn

```text
Giỏ frontend → gửi productId + quantity
→ backend validate dữ liệu và quyền
→ backend đọc lại giá/tồn kho từ database
→ backend tính tổng và tạo đơn theo transaction
→ frontend hiển thị kết quả server xác nhận
```

## Checklist review

- [ ] Không có secret hoặc dữ liệu cá nhân trong commit/log.
- [ ] Dữ liệu từ API được escape hoặc gán bằng `textContent`.
- [ ] Không dựa vào frontend để xác thực giá, tồn kho hoặc quyền.
- [ ] Endpoint mới có authentication, authorization và validation.
- [ ] Thay đổi đăng nhập/checkout được review riêng.
- [ ] Security headers được cấu hình ở hosting/backend, không chỉ bằng thẻ meta.

Lỗ hổng cần được báo riêng cho chủ repository; không đăng công khai token hoặc dữ liệu khách hàng.
