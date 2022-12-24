import PropTypes from 'prop-types';

export const UsersList = ({ users, deleteUser, toggleStatus }) => {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob }) => (
        <li key={id}>
          <p>Name:{name}</p>
          <p>Email:{email}</p>
          <p>
            Has job:{' '}
            <span
              style={{
                margin: 8,
                padding: '5px 10px',
                borderRadius: 5,
                backgroundColor: 'gray',
              }}
              onClick={() => toggleStatus(id)}
            >
              {hasJob.toString()}
            </span>
          </p>
          <button type="button" onClick={() => deleteUser(id)}>
            Delete
          </button>
          <button type="button">Show poster</button>
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
};
