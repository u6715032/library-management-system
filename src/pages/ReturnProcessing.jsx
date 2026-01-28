export default function ReturnProcessing() {
  return (
    <div className="container">
      <h2>Return Processing</h2>

      <table border="1">
        <tr>
          <th>Customer</th>
          <th>Book</th>
          <th>Borrow Date</th>
          <th>Fine</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>John</td>
          <td>Harry Potter</td>
          <td>10-Jan</td>
          <td>20 Baht</td>
          <td>
            <button>Return</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
