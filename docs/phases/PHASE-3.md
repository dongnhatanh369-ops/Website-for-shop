# Phase 3 — Thanh toán và vận hành

**Trạng thái:** Chưa bắt đầu  
**Chủ trì:** Backend/Vận hành; frontend phụ trách trải nghiệm  
**Mục tiêu:** Có thể nhận, thanh toán và xử lý đơn hàng thực tế.

## Phạm vi backend và vận hành

- [ ] COD và cổng thanh toán được lựa chọn.
- [ ] Tính phí vận chuyển theo địa chỉ và giá trị đơn.
- [ ] Webhook thanh toán có xác thực chữ ký và chống xử lý lặp.
- [ ] Email xác nhận cùng cập nhật trạng thái đơn.
- [ ] Quản lý sản phẩm, tồn kho, đơn và nhân viên.
- [ ] Mã giảm giá, khuyến mãi và quy tắc áp dụng phía server.
- [ ] Chính sách đổi trả, bảo mật và điều khoản được duyệt.

## Phạm vi frontend

- [ ] Checkout thật với phương thức giao hàng/thanh toán từ API.
- [ ] Màn hình thành công, thất bại, chờ thanh toán và thử lại.
- [ ] Tra cứu đơn và timeline trạng thái giao hàng.
- [ ] Dashboard quản trị responsive theo quyền backend trả về.
- [ ] Form quản lý catalog/tồn kho có validation và cảnh báo thao tác.
- [ ] Giao diện voucher hiển thị kết quả do server tính.

## Definition of Done

- [ ] Một đơn thử nghiệm đi trọn luồng và không tạo trùng.
- [ ] Tổng tiền frontend khớp kết quả backend xác nhận.
- [ ] Không lưu dữ liệu thẻ trên hệ thống của shop.
- [ ] Có quy trình hoàn tiền, hủy đơn và xử lý sự cố.

