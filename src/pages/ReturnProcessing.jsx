import { useNavigate } from "react-router-dom";

export default function ReturnProcessing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Return Processing</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Book</th>
            <th>Borrow Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Harry Potter</td>
            <td>10-Jan</td>
            <td>
              <button onClick={() => navigate("/fine")}>
                Process Return
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
