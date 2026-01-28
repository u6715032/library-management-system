import { useNavigate } from "react-router-dom";

export default function ReturnProcessing() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/fine");
  };

  return (
    <div className="container">
      <h2>Return Processing</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Book</th>
            <th>Borrow Date</th>
            <th>Fine</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>Harry Potter</td>
            <td>10-Jan</td>
            <td>20 Baht</td>
            <td>
              <button onClick={handleReturn}>Return</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
