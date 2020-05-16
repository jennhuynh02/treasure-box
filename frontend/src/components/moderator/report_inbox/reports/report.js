import React from 'react';

class Report extends React.Component {
  render() {
    const { user, deleteSelectedUser, treasure } = this.props;
    let id;
    id = user._id;
    let imgUrl;
    imgUrl = treasure.url;
    let reportMsg;
    reportMsg = treasure.reportMessage;
    return (
      <div className="content-item">
        <div className="report-info">
          <h1> Item was created by {' '}
            {user.firstName}
            {' '}
            {user.lastName}
          </h1>
          <h1>Email:  {user.email}</h1>
          <img className="content-img" src={imgUrl} />
          <p>
            Flagged Content Report Message:  "
            {reportMsg}
            "
          </p>
          <button onClick={() => deleteSelectedUser(id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default Report;
