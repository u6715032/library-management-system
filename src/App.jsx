import { Routes, Route } from "react-router-dom";

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
