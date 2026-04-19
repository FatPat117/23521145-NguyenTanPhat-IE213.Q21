## Lab 4 — Frontend Movie Reviews (React)

### Bài 1

- Thư mục frontend: `lab4/frontend`
- Chạy: `cd lab4/frontend` rồi `npm install`, sau đó `npm start`
- Đã cài: `bootstrap`, `react-router-dom`, `react-bootstrap`

### Bài 2

- Component trong `lab4/frontend/src/components/`: `movies-list.js`, `movie.js`, `add-review.js`, `login.js`
- `App.js`: Navbar React-Bootstrap, logo **Movie Reviews**, link **Movies**, **Login** / **Logout User**, dùng `useState` cho `user`

### Bài 3

- `App.js`: dùng `Switch` / `Route` (`react-router-dom` v5) với các đường dẫn như đề bài

### Ghi chú (Vite + file .js có JSX)

Vite mặc định chỉ coi JSX hợp lệ trong `.jsx`. Để giữ đúng tên `App.js` và `components/*.js` như đề, `vite.config.js` có plugin nhỏ dùng `esbuild` biên dịch JSX trong các file `.js` dưới `src/` trước bước build.
