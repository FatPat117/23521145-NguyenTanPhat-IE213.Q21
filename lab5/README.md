# LAB 5 - XÂY DỰNG FRONTEND VỚI REACTJS

## Mục tiêu
Hoàn thiện giao diện frontend cho ứng dụng Movie Reviews và kết nối với backend đã làm ở các lab trước.

## Yêu cầu đã thực hiện

### Bài 1: Kết nối tới Backend
- Đã cài đặt `axios`.
- Đã tạo service `src/services/movies.js` với các hàm:
  - `getAll(page)`
  - `get(id)`
  - `createReview(data)`
  - `updateReview(data)`
  - `deleteReview(id, userId)`
  - `getRatings()`
- Đã bổ sung `find(query, by, page)` để tìm kiếm phim theo `title` hoặc `rated`.

### Bài 2: Xây dựng MoviesList Component
- Đã tạo các state:
  - `movies`
  - `searchTitle`
  - `searchRating`
  - `ratings`
- Đã tạo 2 hàm:
  - `retrieveMovies()` để lấy danh sách phim
  - `retrieveRatings()` để lấy danh sách ratings
- Đã dùng `useEffect()` để gọi dữ liệu khi component được render.
- Đã tạo 2 form tìm kiếm:
  - Tìm theo `title`
  - Tìm theo `rating`
- Đã hiển thị danh sách phim bằng `Card` của `react-bootstrap`.
- Đã hiện thực:
  - `findByTitle()`
  - `findByRating()`

### Bài 3: Trang chi tiết Movie
- Đã xây dựng `src/components/movie.js`.
- Đã tạo state `movie` để lưu thông tin chi tiết phim và danh sách review.
- Đã xây dựng `getMovie(id)` để gọi API `get(id)` từ `MovieDataService`.
- Đã hiển thị thông tin phim và liên kết `Add Review`.

### Bài 4: Hiển thị danh sách review
- Đã hiển thị danh sách review bên dưới phần plot.
- Đã dùng `moment` để format ngày review:
  - `moment(review.date).format("Do MMMM YYYY")`
- Đã hiển thị nút `Edit` và `Delete` khi user đăng nhập và đúng `user_id`.

### Bổ sung hỗ trợ thao tác review
- `src/components/add-review.js` đã hỗ trợ:
  - Thêm review mới
  - Sửa review cũ (nếu đi từ link Edit)
- `src/components/login.js` đã tạo form login đơn giản để nhập `name` và `id`.

## Cách chạy chương trình
```bash
cd lab5/frontend
npm install
npm start
```

## Cấu hình backend (tùy chọn)
Có thể tạo file `.env` trong `lab5/frontend`:
```env
VITE_API_BASE_URL=http://localhost:3000/api/v1/movies
```

Nếu không cấu hình, mặc định frontend sẽ gọi:
- `http://localhost:3000/api/v1/movies`

## Kiểm tra nhanh
- Danh sách phim hiển thị ở trang `/movies`.
- Tìm kiếm theo title/rating hoạt động.
- Trang chi tiết phim (`/movies/:id`) hiển thị thông tin và reviews.
- Thêm/Sửa/Xóa review hoạt động khi đăng nhập.
