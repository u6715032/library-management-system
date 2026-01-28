export default function UserManagement() {
  return (
    <div className="container">
      <h2>User Management</h2>

      <button>Add User</button>

      <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Alice</td>
          <td>alice@mail.com</td>
          <td>Staff</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
