import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Login from "./pages/Login";
import BookSearch from "./pages/BookSearch";
import BorrowHistory from "./pages/BorrowHistory";
import BookDetail from "./pages/BookDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/search" element={<BookSearch />} />
          <Route path="/history" element={<BorrowHistory />} />
          <Route path="/detail" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
