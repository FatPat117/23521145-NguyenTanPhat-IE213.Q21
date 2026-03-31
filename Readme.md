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
- **Chưa hoàn thành**: các yêu cầu nâng cao của Lab 4 (lấy movie theo id + aggregate + ratings).

