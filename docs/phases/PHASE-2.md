# Phase 2 — Backend và dữ liệu thật

**Trạng thái:** Chưa bắt đầu  
**Chủ trì:** Backend  
**Mục tiêu:** Quản lý tập trung sản phẩm, tồn kho, tài khoản và đơn hàng.

## Phạm vi backend

- [ ] Chốt stack backend, database và môi trường triển khai.
- [ ] Thiết kế schema sản phẩm, biến thể, tồn kho, người dùng và đơn hàng.
- [ ] API danh sách/chi tiết/tìm kiếm/lọc sản phẩm.
- [ ] API tạo và xem đơn hàng.
- [ ] Đăng ký, đăng nhập, đăng xuất và quên mật khẩu.
- [ ] Phân quyền Khách hàng, Nhân viên và Quản trị viên.
- [ ] Validation, rate limit, audit log và quản lý secret.
- [ ] Upload, kiểm tra và tối ưu ảnh.

## Phạm vi frontend hỗ trợ

- [ ] Tạo API client thay cho đọc `data/products.json`.
- [ ] Thêm trạng thái loading, empty, error và retry.
- [ ] Đồng bộ giỏ hàng cục bộ với dữ liệu server.
- [ ] Xây giao diện đăng ký, đăng nhập và quên mật khẩu.
- [ ] Hiển thị lỗi API an toàn, không lộ thông tin nội bộ.
- [ ] Giữ mock adapter để frontend phát triển độc lập.

## Hợp đồng tích hợp

- Backend cung cấp OpenAPI/schema và response mẫu.
- ID, giá, tồn kho và tổng đơn phải do backend xác nhận.
- Frontend không tự quyết định quyền truy cập.
- Chi tiết bảo mật và endpoint dự kiến nằm trong `SECURITY.md`.

## Definition of Done

- [ ] Frontend không còn phụ thuộc dữ liệu JSON trong production.
- [ ] Luồng tài khoản và đơn hàng dùng API thật.
- [ ] Có kiểm thử authorization và validation phía server.
- [ ] Không có secret hoặc dữ liệu nhạy cảm trong frontend/Git.

