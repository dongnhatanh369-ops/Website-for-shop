# DNA Hobby Store — Roadmap phát triển

Tài liệu này giúp mọi thành viên hiểu dự án đang ở đâu, cần làm gì tiếp theo và cách phối hợp khi cùng phát triển website.

## 1. Mục tiêu sản phẩm

Xây dựng DNA Hobby Store thành nền tảng bán mô hình trực tuyến dành cho cộng đồng sưu tầm Gundam, Figure và Diecast tại Việt Nam.

Trải nghiệm cốt lõi:

- Khách dễ dàng khám phá, tìm kiếm và lọc sản phẩm.
- Thông tin sản phẩm rõ ràng, hình ảnh đẹp, giá và tồn kho chính xác.
- Giỏ hàng và thanh toán thuận tiện trên máy tính lẫn điện thoại.
- Người quản trị có thể quản lý sản phẩm, đơn hàng và khách hàng.

## 2. Yêu cầu gốc từ README

Roadmap này được xây dựng dựa trên bốn yêu cầu chính trong `README.md`:

| Yêu cầu | Tiêu chí nghiệm thu | Trạng thái |
| --- | --- | --- |
| Nền dễ nhìn, không quá sáng hoặc quá tối | Màu nền trung tính, độ tương phản đạt chuẩn và nội dung dễ đọc | Đã có bản đầu, cần kiểm thử accessibility |
| Hiển thị rõ danh mục, hình ảnh và tên sản phẩm | Mỗi sản phẩm có danh mục, ảnh, tên, giá và trạng thái rõ ràng | Đã có danh mục/tên/giá; ảnh thật chưa hoàn thành |
| Phù hợp máy tính và điện thoại | Không tràn nội dung; thao tác được ở mobile, tablet và desktop | Đã responsive cơ bản, cần kiểm thử nhiều thiết bị |
| Bảo mật cao cho khách hàng và chủ quản | Xác thực, phân quyền, validate dữ liệu, bảo vệ phiên và dữ liệu nhạy cảm | Chưa triển khai; là yêu cầu bắt buộc trước production |

Mọi pull request cần ghi rõ thay đổi liên quan đến yêu cầu nào ở trên. Không được xem sản phẩm là sẵn sàng triển khai thật nếu yêu cầu bảo mật chưa đạt.

## 3. Trạng thái hiện tại

### Đã hoàn thành — Prototype trang chủ

- [x] Giao diện trang chủ responsive.
- [x] Danh mục Gundam, Figure và Diecast.
- [x] Danh sách sản phẩm mẫu.
- [x] Lọc sản phẩm theo danh mục.
- [x] Tìm kiếm theo tên sản phẩm.
- [x] Thêm và xóa sản phẩm trong giỏ hàng.
- [x] Tự động tính tạm tính trong giỏ hàng.

### Giới hạn hiện tại

- Dữ liệu sản phẩm đang được khai báo trực tiếp trong `script.js`.
- Giỏ hàng chưa được lưu khi tải lại trang.
- Chưa có trang chi tiết sản phẩm, đăng nhập hoặc thanh toán thật.
- Chưa có backend, cơ sở dữ liệu và trang quản trị.
- Hình sản phẩm hiện là minh họa bằng chữ và CSS.

## 4. Lộ trình

### Giai đoạn 1 — Hoàn thiện storefront MVP

Mục tiêu: khách có thể xem sản phẩm và tạo giỏ hàng hoàn chỉnh.

- [x] Tách dữ liệu sản phẩm sang JSON riêng, sẵn sàng thay bằng API.
- [x] Thêm ảnh sản phẩm minh họa được lưu cục bộ.
- [x] Tạo trang chi tiết sản phẩm riêng theo `?id=`.
- [x] Thêm nút tải thêm sản phẩm.
- [x] Lọc theo giá, thương hiệu, tỉ lệ và trạng thái còn hàng.
- [x] Sắp xếp theo giá, tên, mới nhất và bán chạy.
- [x] Lưu giỏ hàng bằng `localStorage`.
- [x] Thêm tăng/giảm số lượng sản phẩm trong giỏ.
- [x] Tạo luồng nhập thông tin giao hàng mẫu phía frontend.
- [x] Hoàn thiện cấu trúc accessibility và responsive cho mobile, tablet, desktop.
- [x] Dùng bảng màu trung tính và trạng thái focus có độ tương phản rõ.

### Giai đoạn 2 — Backend và dữ liệu thật

Mục tiêu: sản phẩm, tồn kho và đơn hàng được quản lý tập trung.

- [ ] Chọn stack backend và cơ sở dữ liệu.
- [ ] Thiết kế schema cho sản phẩm, biến thể, tồn kho, khách hàng và đơn hàng.
- [ ] Xây API sản phẩm, danh mục và tìm kiếm.
- [ ] Xây API giỏ hàng và đơn hàng.
- [ ] Thêm đăng ký, đăng nhập và quên mật khẩu.
- [ ] Phân quyền khách hàng và quản trị viên.
- [ ] Validate dữ liệu ở cả frontend và backend.
- [ ] Thiết lập upload và tối ưu ảnh.
- [ ] Mã hóa mật khẩu bằng thuật toán chuyên dụng; tuyệt đối không lưu mật khẩu thô.
- [ ] Dùng cookie phiên `HttpOnly`, `Secure`, `SameSite` và cơ chế chống CSRF phù hợp.
- [ ] Chống XSS, SQL/NoSQL injection, brute force và giới hạn tần suất request.
- [ ] Quản lý secret bằng biến môi trường; không commit khóa bí mật vào Git.
- [ ] Ghi audit log cho thao tác quan trọng của quản trị viên.
- [ ] Thiết lập kiểm tra dependency và quy trình cập nhật lỗ hổng.

### Giai đoạn 3 — Thanh toán và vận hành

Mục tiêu: có thể nhận và xử lý đơn hàng thực tế.

- [ ] Tích hợp phương thức COD.
- [ ] Nghiên cứu cổng thanh toán phù hợp tại Việt Nam.
- [ ] Tính phí vận chuyển theo địa chỉ và giá trị đơn hàng.
- [ ] Gửi email xác nhận và cập nhật trạng thái đơn.
- [ ] Tạo trang quản trị sản phẩm, tồn kho và đơn hàng.
- [ ] Tạo mã giảm giá và chương trình khuyến mãi.
- [ ] Thêm chính sách đổi trả, bảo mật và điều khoản sử dụng.

### Giai đoạn 4 — Tăng trưởng

Mục tiêu: tăng khả năng tìm thấy sản phẩm và giữ chân khách hàng.

- [ ] Tối ưu SEO, metadata, sitemap và structured data.
- [ ] Thêm đánh giá sản phẩm và danh sách yêu thích.
- [ ] Thêm tài khoản thành viên và lịch sử mua hàng.
- [ ] Theo dõi sản phẩm sắp mở bán hoặc restock.
- [ ] Tích hợp analytics và theo dõi chuyển đổi.
- [ ] Tối ưu hiệu năng theo Core Web Vitals.
- [ ] Xây nội dung blog/hướng dẫn lắp ráp và sưu tầm.

## 5. Ưu tiên gần nhất

| Ưu tiên | Công việc | Kết quả mong đợi |
| --- | --- | --- |
| P0 | Chuẩn hóa dữ liệu sản phẩm | Sản phẩm không còn viết trực tiếp trong phần render UI |
| P0 | Trang chi tiết sản phẩm | Có ảnh, mô tả, tồn kho và nút thêm giỏ |
| P0 | Lưu giỏ hàng | Giỏ hàng giữ nguyên sau khi tải lại trang |
| P0 | Thiết kế kiến trúc bảo mật | Có mô hình phân quyền và checklist bảo mật trước khi làm backend |
| P1 | Bộ lọc và sắp xếp | Khách tìm được sản phẩm nhanh hơn |
| P1 | Checkout mẫu | Hoàn thiện luồng từ giỏ đến xác nhận đơn |
| P1 | Kiểm thử responsive | Hoạt động tốt trên mobile, tablet và desktop |
| P1 | Backend và quản trị an toàn | Dữ liệu thật có xác thực, phân quyền và validation |

## 6. Cấu trúc hiện tại

```text
Website-for-shop/
├── index.html                  # Trang chủ và sản phẩm nổi bật
├── pages/
│   ├── products.html          # Danh sách, tìm kiếm và lọc sản phẩm
│   ├── product-detail.html    # Chi tiết sản phẩm theo tham số ?id=
│   └── checkout.html          # Form nhận hàng và tóm tắt đơn mẫu
├── data/products.json         # Nguồn dữ liệu frontend mẫu
├── assets/products/           # Ảnh sản phẩm
├── style.css                  # Thiết kế dùng chung và responsive
├── script.js                  # Dữ liệu mẫu, catalog, chi tiết và giỏ hàng
└── ROADMAP.md                 # Kế hoạch và hướng dẫn phối hợp
```

Khi dự án lớn hơn, nên tách thành các thư mục `assets/`, `pages/`, `components/`, `data/` và `tests/`, hoặc chuyển sang framework sau khi đội thống nhất.

## 7. Quy trình làm việc chung

1. Kiểm tra Issues và roadmap trước khi bắt đầu.
2. Tạo hoặc nhận một Issue có mô tả và tiêu chí hoàn thành rõ ràng.
3. Tạo nhánh từ `main` theo mẫu:
   - `feature/ten-tinh-nang`
   - `fix/ten-loi`
   - `docs/noi-dung-tai-lieu`
4. Chỉ xử lý một nhóm thay đổi liên quan trong mỗi pull request.
5. Tự kiểm tra giao diện desktop/mobile và các chức năng bị ảnh hưởng.
6. Mở pull request về `main`, liên kết Issue và ghi rõ cách kiểm thử.
7. Cần ít nhất một người khác review trước khi merge khi dự án có nhiều thành viên.

## 8. Quy ước commit

Khuyến khích dùng commit ngắn gọn theo Conventional Commits:

```text
feat: add product detail page
fix: preserve cart after page reload
style: improve mobile product grid
docs: update project roadmap
```

Các tiền tố thường dùng: `feat`, `fix`, `style`, `refactor`, `test`, `docs`, `chore`.

## 9. Definition of Done

Một công việc chỉ được xem là hoàn thành khi:

- [ ] Đáp ứng tiêu chí của Issue.
- [ ] Không làm hỏng các chức năng hiện tại.
- [ ] Hoạt động trên desktop và mobile nếu có thay đổi giao diện.
- [ ] Không có lỗi trong console trình duyệt.
- [ ] Nội dung tiếng Việt hiển thị đúng UTF-8.
- [ ] Danh mục, hình ảnh, tên sản phẩm và trạng thái quan trọng hiển thị rõ ràng.
- [ ] Không đưa secret, mật khẩu, token hoặc dữ liệu cá nhân vào mã nguồn/log.
- [ ] Thay đổi liên quan tài khoản, dữ liệu hoặc thanh toán đã được review về bảo mật.
- [ ] Đã tự kiểm thử và mô tả cách kiểm thử trong pull request.
- [ ] Tài liệu được cập nhật nếu thay đổi hành vi hoặc cấu trúc dự án.

## 10. Gợi ý Issue cho người mới

Các đầu việc phù hợp để bắt đầu:

- Thêm nút tăng/giảm số lượng trong giỏ hàng.
- Lưu giỏ hàng vào `localStorage`.
- Thêm trạng thái “hết hàng” cho sản phẩm.
- Thêm nút quay lại đầu trang.
- Cải thiện focus state cho bàn phím.
- Tạo dữ liệu sản phẩm trong file JSON.
- Viết hướng dẫn chạy dự án trong `README.md`.

## 11. Nguyên tắc bảo mật bắt buộc

- Quyền truy cập phải theo nguyên tắc tối thiểu; khách hàng không được truy cập chức năng quản trị.
- Không tin dữ liệu từ trình duyệt; backend phải xác thực và làm sạch mọi đầu vào.
- Dữ liệu nhạy cảm phải được bảo vệ khi truyền và khi lưu trữ.
- Không tự xây cơ chế mã hóa hoặc xác thực nếu có thư viện uy tín đã được kiểm chứng.
- Lỗi trả về cho người dùng không được làm lộ stack trace, cấu trúc hệ thống hoặc secret.
- Mọi thay đổi về đăng nhập, phân quyền, thanh toán và dữ liệu cá nhân cần review riêng.
- Trước khi đưa lên production cần có HTTPS, backup, khôi phục dữ liệu và kế hoạch xử lý sự cố.

### Phân chia trách nhiệm

- Frontend: giao diện an toàn, giới hạn/validate đầu vào cơ bản, không lưu dữ liệu nhạy cảm, CSP và trải nghiệm responsive/accessibility.
- Backend: xác thực, phân quyền, session, validate lại toàn bộ đầu vào, bảo vệ API, mã hóa dữ liệu, audit log và thanh toán.
- Kiểm tra phía frontend chỉ hỗ trợ trải nghiệm người dùng, không thay thế kiểm tra và phân quyền phía backend.

## 12. Cập nhật roadmap

- Đánh dấu `[x]` khi công việc đã merge vào `main`.
- Ghi thêm công việc mới vào đúng giai đoạn, tránh tạo danh sách trùng lặp.
- Khi thay đổi ưu tiên hoặc kiến trúc, giải thích quyết định trong Issue hoặc pull request liên quan.
- Roadmap là tài liệu sống và nên được rà soát sau mỗi cột mốc lớn.
