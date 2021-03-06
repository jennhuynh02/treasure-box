import React from 'react';
import { Link } from 'react-router-dom';

class AdminBar extends React.PureComponent {
  render() {
    const { logout } = this.props;

    return (
      <div className="navbar-container" id="adminbar-id">
        <div className="navbar-left">
          <Link to="/main"><h1>KRMA</h1></Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-items">
            <Link to="/users">All Users</Link>
            <Link to="/collection">All Karma</Link>
            <Link to="/reports">Reported Karma</Link>
            <div onClick={() => logout()}>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminBar;
