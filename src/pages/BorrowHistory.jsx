export default function BorrowHistory() {
  return (
    <div className="container">
      <h2>Borrow History</h2>

      <table border="1">
        <tr>
          <th>Book</th>
          <th>Borrow Date</th>
          <th>Return Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Harry Potter</td>
          <td>10-Jan</td>
          <td>-</td>
          <td>Borrowed</td>
        </tr>
      </table>
    </div>
  );
}
