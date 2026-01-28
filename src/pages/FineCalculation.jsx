import { useNavigate } from "react-router-dom";

export default function FineCalculation() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Fine Calculation</h2>

      <p><b>Customer:</b> John</p>
      <p><b>Book:</b> Harry Potter</p>
      <p><b>Borrow Date:</b> 10-Jan</p>
      <p><b>Return Date:</b> 25-Jan</p>
      <p><b>Late Days:</b> 4</p>
      <p><b>Fine:</b> 20 Baht</p>

      <button onClick={() => alert("Payment completed")}>
        Mark as Paid
      </button>

      <br /><br />

      <button onClick={() => navigate("/return")}>
        Back
      </button>
    </div>
  );
}
