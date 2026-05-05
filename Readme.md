## Thông tin sinh viên
- **Họ tên**: Nguyễn Tấn Phát
- **MSSV**: 23521145
- **Lớp**: IE213.Q21.1

## Môn học
- **IE213.Q21**

## Danh sách các lab
- **Lab 1**: Thực hành MongoDB (CRUD, query, update, aggregate) với collection `employees`.
- **Lab 2**: Thiết lập môi trường Node.js + khởi tạo backend Movie Reviews (Express + MongoDB Atlas + DAO + Controller).
- **Lab 3**: Thiết lập định tuyến + Controller + DAO cho `review` (POST/PUT/DELETE) trong backend Movie Reviews.
- **Lab 4**: Thiết lập frontend React (Vite) cho ứng dụng minh hoạ Movie Reviews: Bootstrap, React Router, Navbar, các component và định tuyến trang.
- **Lab 5**: Kết nối frontend ReactJS với backend bằng axios, xây dựng danh sách phim có tìm kiếm, trang chi tiết phim, hiển thị và thao tác review (thêm/sửa/xóa), định dạng ngày bằng moment.

## Lab 1
### Mô tả ngắn gọn
Thực hành các thao tác MongoDB trên collection `employees`: tạo dữ liệu, tạo index, truy vấn theo điều kiện, update theo điều kiện, và aggregate theo `organization`.

### Cách chạy / thực hiện
- Mở **MongoDB Shell** (`mongosh`) và chọn DB làm việc (theo hướng dẫn trong `lab1/script.md`).
- Chạy lần lượt các lệnh trong `lab1/script.md` (từ 2.1 → 2.10).

### Kết quả thực hiện
- **Script**: `lab1/script.md`
- **Ảnh minh hoạ/output**: `lab1/README.md` (tham chiếu các ảnh `./images/Cau2.x.png`).

### Hoàn thành / chưa hoàn thành
- **Đã hoàn thành**: 2.1 → 2.10 (theo `lab1/script.md` và ảnh trong `lab1/README.md`).
- **Chưa hoàn thành**: (không).

## Lab 2
### Mô tả ngắn gọn
Thiết lập môi trường Node.js, cài dependencies và `nodemon`, sau đó khởi tạo backend minh hoạ Movie Reviews theo kiến trúc:
Router → Controller → DAO → MongoDB (Atlas/sample dataset `sample_mflix`).

### Cách chạy chương trình
1) Vào thư mục lab:

```bash
cd lab2
npm install
```

2) Tạo/cập nhật biến môi trường:
- Tạo file `lab2/backend/.env` (hoặc copy từ `lab2/.env.example`) và điền:
  - `MOVIEREVIEWS_DB_URI=...`
  - `MOVIEREVIEWS_NS=sample_mflix`
  - `PORT=3000`

3) Chạy server:

```bash
npm run dev
```

4) Test API:
- `GET http://localhost:3000/api/v1/movies/`
- `GET http://localhost:3000/api/v1/movies/?moviesPerPage=1&page=0`

### Kết quả thực hiện
- **Thiết lập môi trường (Bài 1)**: đã cài `mongodb`, `express`, `cors`, `dotenv`, và `nodemon`.
- **Backend (Bài 2)**:
  - `backend/server.js`: khởi tạo Express + middleware + mount route + 404
  - `backend/index.js`: kết nối MongoDB Atlas, gọi `MoviesDAO.injectDB()`, chạy server
  - `backend/api/movies.route.js`: định tuyến `/api/v1/movies`
  - `backend/api/movies.controller.js`: `apiGetMovies` trả JSON
  - `backend/dao/moviesDAO.js`: `injectDB`, `getMovies`

### Hình ảnh minh hoạ / output
- **Kiểm tra Node.js version**: `lab2/images/node-version.png`

### Hoàn thành / chưa hoàn thành
- **Đã hoàn thành**:
  - Bài 1: 1.1 → 1.6
  - Bài 2: 2.1 → 2.7
- **Chưa hoàn thành**: Không

## Lab 3
### Mô tả ngắn gọn
Thiết lập định tuyến cho các thao tác `review` trong ứng dụng minh hoạ Movie Reviews:
Router → `ReviewsController` → `ReviewsDAO` → MongoDB (collection `reviews`).

### Cách chạy chương trình
1) Vào thư mục lab:

```bash
cd lab3
npm install
```

2) Chạy server:

```bash
npm run dev
```

3) Test API (endpoint cuối: `/review`):
- `POST http://localhost:3000/api/v1/movies/review`
- `PUT http://localhost:3000/api/v1/movies/review`
- `DELETE http://localhost:3000/api/v1/movies/review`

### Kết quả thực hiện
- Đã triển khai route `/api/v1/movies/review` với đủ `POST/PUT/DELETE`.
- Đã tạo:
  - `backend/api/reviews.controller.js`: xử lý request body và trả JSON `success`.
  - `backend/dao/reviewsDAO.js`: thao tác `insertOne`, `updateOne`, `deleteOne` trên collection `reviews`.
  - `backend/index.js`: injectDB cho `ReviewsDAO` sau khi kết nối MongoDB.

### Hình ảnh minh hoạ / output
- **Kiểm tra Node.js version**: `lab3/images/node-version.png`

### Hoàn thành / chưa hoàn thành
- **Đã hoàn thành**:
  - Bài 1 (routing): 1.1 → 1.4 cho `/review`
  - Bài 2 (controller + gọi DAO): 2.1 → 2.5
  - Bài 3 (DAO + injectDB + ObjectId): 3.1 → 3.5
- **Chưa hoàn thành**: (không).

## Lab 4
### Mô tả ngắn gọn
Thiết lập môi trường frontend với **React** (template Vite) trong `lab4/frontend`, cài **Bootstrap** và **react-router-dom** (v5), xây dựng **Navbar** (react-bootstrap), các component `movies-list`, `movie`, `add-review`, `login`, và định tuyến nội bộ (`/`, `/movies`, `/movies/:id`, `/movies/:id/review`, `/login`) với trạng thái đăng nhập `user` trong `App.js`.

### Cách chạy chương trình
1) Vào thư mục frontend:

```bash
cd lab4/frontend
npm install
```

2) Chạy ứng dụng (dev server):

```bash
npm start
```

3) Mở trình duyệt tại URL mà Vite hiển thị (thường là `http://localhost:5173`) để xem navbar **Movie Reviews** và điều hướng các trang.

### Kết quả thực hiện
- **Bài 1**: Đã tạo project frontend, script `npm start` chạy Vite; đã cài `bootstrap`, `react-bootstrap`, `react-router-dom`.
- **Bài 2**: Đã tạo component trong `lab4/frontend/src/components/`: `movies-list.js`, `movie.js`, `add-review.js`, `login.js`; `App.js` có Navbar (logo **Movie Reviews**, link **Movies**, **Login** / **Logout User**), `useState` cho `[user, setUser]`.
- **Bài 3**: `main.jsx` bọc `BrowserRouter`; `App.js` dùng `Switch` / `Route` với các đường dẫn theo đề, truyền `user` / `login` vào component khi cần.

### Hình ảnh minh hoạ / output
- Theo màn hình bài lab (navbar sáng, link Movies / Login).

### Hoàn thành / chưa hoàn thành
- **Đã hoàn thành**:
  - Bài 1: khởi tạo frontend + cài package hỗ trợ UI và định tuyến
  - Bài 2: component + Navigation bar
  - Bài 3: định tuyến đủ 4 nhánh như đề bài
- **Chưa hoàn thành**: (không).

## Lab 5
### Mô tả ngắn gọn
Xây dựng frontend ReactJS kết nối backend Movie Reviews bằng `axios`, triển khai danh sách phim có tìm kiếm theo `title` và `rating`, xây dựng trang chi tiết phim hiển thị nội dung và danh sách review, hỗ trợ thêm/sửa/xóa review và định dạng ngày review bằng `moment`.

### Cách chạy chương trình
1) Vào thư mục frontend:

```bash
cd lab5/frontend
npm install
```

2) Chạy ứng dụng:

```bash
npm start
```

3) (Tuỳ chọn) cấu hình API backend qua biến môi trường:
- Tạo file `.env` trong `lab5/frontend` với:
  - `VITE_API_BASE_URL=http://localhost:3000/api/v1/movies`

### Kết quả thực hiện
- **Bài 1**:
  - Đã cài `axios` cho dự án.
  - Đã tạo `src/services/movies.js` với các hàm:
    - `getAll()`
    - `get(id)`
    - `createReview(data)`
    - `updateReview(data)`
    - `deleteReview(id, userId)`
    - `getRatings()`
  - Có thêm `find(query, by, page)` để phục vụ chức năng tìm kiếm.
- **Bài 2** (`src/components/movies-list.js`):
  - Đã tạo state `movies`, `searchTitle`, `searchRating`, `ratings`.
  - Đã cài `retrieveMovies()` và `retrieveRatings()` và gọi bằng `useEffect`.
  - Đã tạo form tìm kiếm theo title và rating.
  - Đã hiển thị danh sách phim bằng `Card` của `react-bootstrap`.
  - Đã cài `findByTitle()` và `findByRating()`.
- **Bài 3 & 4** (`src/components/movie.js`):
  - Đã lấy chi tiết phim qua `getMovie()` và hiển thị thông tin phim.
  - Đã hiển thị danh sách review dưới phần plot.
  - Đã định dạng ngày review bằng `moment(...).format("Do MMMM YYYY")`.
  - Đã hỗ trợ điều hướng thêm/sửa/xóa review (kết nối service review).
- **Bổ sung thao tác review và đăng nhập**:
  - `src/components/add-review.js`: hỗ trợ thêm review mới và sửa review cũ.
  - `src/components/login.js`: form đăng nhập đơn giản với `name` và `id` để thao tác review.

### Kiểm tra nhanh chức năng
- Danh sách phim hiển thị tại `/movies`.
- Tìm kiếm theo title/rating hoạt động đúng.
- Trang chi tiết phim (`/movies/:id`) hiển thị đầy đủ thông tin và reviews.
- Chức năng thêm/sửa/xóa review hoạt động khi đã đăng nhập.

### Hoàn thành / chưa hoàn thành
- **Đã hoàn thành**: các yêu cầu chính của đề Lab 5 (kết nối backend, danh sách phim, tìm kiếm, trang chi tiết phim, hiển thị review, format thời gian).
- **Chưa hoàn thành**: (không).
