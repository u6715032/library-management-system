import { Routes, Route } from "react-router-dom";

// Public
import Login from "./pages/Login";

// Customer
import BookSearch from "./pages/BookSearch";
import BookDetail from "./pages/BookDetail";
import BorrowHistory from "./pages/BorrowHistory";

// Staff
import BorrowApproval from "./pages/BorrowApproval";
import ReturnProcessing from "./pages/ReturnProcessing";

// Admin
import BookManagement from "./pages/BookManagement";
import BookCopyManagement from "./pages/BookCopyManagement";
import UserManagement from "./pages/UserManagement";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />

      {/* Customer */}
      <Route path="/search" element={<BookSearch />} />
      <Route path="/book/:isbn" element={<BookDetail />} />
      <Route path="/history" element={<BorrowHistory />} />

      {/* Staff */}
      <Route path="/approve" element={<BorrowApproval />} />
      <Route path="/return" element={<ReturnProcessing />} />

      {/* Admin */}
      <Route path="/books" element={<BookManagement />} />
      <Route path="/copies" element={<BookCopyManagement />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;
