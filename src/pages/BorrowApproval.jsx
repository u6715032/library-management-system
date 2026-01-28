import { useState, useEffect } from "react";

export default function BorrowApproval() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("borrows")) || [];
    setRequests(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = requests.map((r) =>
      r.id === id ? { ...r, status } : r
    );

    setRequests(updated);
    localStorage.setItem("borrows", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Borrow Approval</h2>

      {requests.filter(r => r.status === "pending").length === 0 && (
        <p>No pending requests</p>
      )}

      {requests
        .filter(r => r.status === "pending")
        .map((r) => (
          <div key={r.id} style={box}>
            <p><b>Book:</b> {r.book}</p>
            <p><b>User:</b> {r.user}</p>

            <button onClick={() => updateStatus(r.id, "approved")}>
              Approve
            </button>

            <button onClick={() => updateStatus(r.id, "rejected")}>
              Reject
            </button>
          </div>
        ))}
    </div>
  );
}

const box = {
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #444",
};
