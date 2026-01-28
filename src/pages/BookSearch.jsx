import { Link } from "react-router-dom";

export default function BookSearch() {
  return (
    <div className="container">
      <h2>Book Search</h2>

      <input placeholder="Search by title or author" />
      <button>Search</button>

      <table border="1">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Harry Potter</td>
          <td>J.K. Rowling</td>
          <td>Available</td>
          <td>
            <Link to="/detail">
              <button>View</button>
            </Link>
          </td>
        </tr>
      </table>

      <br />
      <Link to="/history">
        <button>View Borrow History</button>
      </Link>
    </div>
  );
}
