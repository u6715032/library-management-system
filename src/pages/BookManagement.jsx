export default function BookManagement() {
  return (
    <div className="container">
      <h2>Book Management</h2>

      <button>Add Book</button>

      <table border="1">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Harry Potter</td>
          <td>J.K. Rowling</td>
          <td>123456789</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
