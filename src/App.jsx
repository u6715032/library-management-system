import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import BookSearch from "./pages/BookSearch";
import BookDetail from "./pages/BookDetail";
import BorrowHistory from "./pages/BorrowHistory";
import BorrowApproval from "./pages/BorrowApproval";
import ReturnProcessing from "./pages/ReturnProcessing";
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
      <Route
        path="/search"
        element={
          <ProtectedRoute role="customer">
            <BookSearch />
          </ProtectedRoute>
        }
      />
      <Route
        path="/book/:isbn"
        element={
          <ProtectedRoute role="customer">
            <BookDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute role="customer">
            <BorrowHistory />
          </ProtectedRoute>
        }
      />

      {/* Staff */}
      <Route
        path="/approve"
        element={
          <ProtectedRoute role="staff">
            <BorrowApproval />
          </ProtectedRoute>
        }
      />
      <Route
        path="/return"
        element={
          <ProtectedRoute role="staff">
            <ReturnProcessing />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/books"
        element={
          <ProtectedRoute role="admin">
            <BookManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/copies"
        element={
          <ProtectedRoute role="admin">
            <BookCopyManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute role="admin">
            <UserManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute role="admin">
            <Reports />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
