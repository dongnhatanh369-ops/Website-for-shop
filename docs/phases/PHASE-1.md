# Phase 1 — Storefront MVP

**Trạng thái:** Hoàn thành frontend  
**Mục tiêu:** Khách có thể khám phá sản phẩm, quản lý giỏ hàng và đi hết luồng đặt hàng mẫu.

## Phạm vi frontend

- [x] Trang chủ, danh sách sản phẩm và trang chi tiết riêng.
- [x] Dữ liệu mẫu trong `data/products.json`.
- [x] Danh mục, tìm kiếm, lọc giá/thương hiệu/tỉ lệ/tồn kho.
- [x] Sắp xếp theo giá, tên, mới nhất và bán chạy.
- [x] Tải thêm sản phẩm và trạng thái không có kết quả.
- [x] Giỏ hàng `localStorage`, tăng/giảm số lượng và tính tổng.
- [x] Checkout mẫu có validation và tóm tắt đơn.
- [x] Ảnh dự phòng, responsive, keyboard focus và reduced motion.
- [x] CSP phía HTML và escape dữ liệu khi render.

## Ngoài phạm vi

- Không gửi đơn thật, không lưu dữ liệu checkout.
- Không có tài khoản, API, database hoặc thanh toán thật.
- Giá và tồn kho phía frontend không có giá trị xác thực giao dịch.

## Kiểm thử

Chạy:

```bash
npm test
```

Kết quả yêu cầu: 4 trang, schema sản phẩm, control catalog, checkout, responsive, accessibility và security rules đều đạt.

## Definition of Done

- [x] Tất cả URL chính hoạt động qua HTTP.
- [x] Không có lỗi cú pháp JavaScript hoặc JSON.
- [x] Luồng catalog → chi tiết → giỏ → checkout hoạt động.
- [x] Checklist Phase 1 trong `ROADMAP.md` hoàn tất.

