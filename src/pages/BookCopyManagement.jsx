export default function BookCopyManagement() {
  return (
    <div className="container">
      <h2>Book Copy Management</h2>

      <select>
        <option>Harry Potter</option>
      </select>

      <button>Add Copy</button>

      <table border="1">
        <tr>
          <th>Copy ID</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>001</td>
          <td>Available</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Borrowed</td>
        </tr>
      </table>
    </div>
  );
}
