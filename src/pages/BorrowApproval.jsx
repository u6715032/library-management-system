export default function BorrowApproval() {
  return (
    <div className="container">
      <h2>Borrow Approval</h2>

      <table border="1">
        <tr>
          <th>Customer</th>
          <th>Book</th>
          <th>Request Date</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>John</td>
          <td>Harry Potter</td>
          <td>12-Jan</td>
          <td>
            <button>Approve</button>
            <button>Reject</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
