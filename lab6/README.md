# LAB 6 - XÂY DỰNG FRONTEND VỚI REACTJS (tiếp theo)

## Mục tiêu
Hoàn thiện chức năng đăng nhập, thêm/sửa/xóa review và phân trang danh sách phim trên frontend React (tiếp nối Lab 5).

## Cấu trúc thư mục
```
lab6/
  README.md
  frontend/          ← mã nguồn React (copy từ lab5/frontend, không lồng thư mục lab5)
    src/
    package.json
    ...
```

## Yêu cầu đã thực hiện

### Bài 1: Thêm và Sửa Review
- **1.1 Login** (`frontend/src/components/login.js`)
- **1.2 Thêm review** (`frontend/src/components/add-review.js`)
- **1.3 Sửa review** (chế độ `editing`, `updateReview`)

### Bài 2: Xóa review
- `frontend/src/components/movie.js` — `deleteReview` + `splice`

### Bài 3: Phân trang & tìm kiếm
- `frontend/src/components/movies-list.js` — `currentPage`, `retrieveNextPage`, `currentSearchMode`

## Cách chạy

1. Backend (lab3):

```bash
cd lab3
npm run dev
```

2. Frontend:

```bash
cd lab6/frontend
npm install
npm start
```

3. (Tùy chọn) `.env` trong `lab6/frontend`:

```env
VITE_API_BASE_URL=http://localhost:3000/api/v1/movies
```
