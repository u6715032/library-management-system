import { useState } from "react";

export default function BorrowApproval() {
  const [status, setStatus] = useState("Pending");

  return (
    <div className="container">
      <h2>Borrow Approval</h2>

      <p>Request: John → Harry Potter</p>
      <p>Status: <b>{status}</b></p>

      <button onClick={() => setStatus("Approved")}>Approve</button>
      <button onClick={() => setStatus("Rejected")}>Reject</button>
    </div>
  );
}
