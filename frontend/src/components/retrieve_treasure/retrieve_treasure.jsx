import React from 'react';
import ImageContainer from '../image/image_container';

class RetrieveTreasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportMessage: '',
      reported: false,
    };
    this.handleReport = this.handleReport.bind(this);
    this.handleTreasure = this.handleTreasure.bind(this);
  }

  componentDidMount() {
    const { fetchTreasure, currentUser, fetchCurrentUser } = this.props;
    debugger
    fetchTreasure(currentUser._id)
      .then(() => this.handleTreasure());
      // .then(() => fetchCurrentUser(currentUser.id));
  }

  componentWillUnmount() {
    const { fetchCurrentUser } = this.props;
    debugger
    fetchCurrentUser();
  }

  handleTreasure() {
    const { currentUser, updateTreasure, currentTreasure } = this.props;
    const assignId = {
      treasure: currentTreasure.id,
      owner: currentUser._id,
    };

    updateTreasure(assignId);
  }

  handleReport() {
    const { updateFullTreasure } = this.props;
    const newTreasure = {
      _id: this.props.currentTreasure._id,
      creatorId: this.props.currentTreasure.creatorId,
      date: this.props.currentTreasure.date,
      ownerId: this.props.currentTreasure.ownerId,
      reportMessage: this.state.reportMessage,
      reported: true,
      type: this.props.currentTreasure.type,
      url: this.props.currentTreasure.url,
    };
    window.location.reload();
    updateFullTreasure(newTreasure);
  }

  update() {
    return (e) => this.setState({
      reportMessage: e.currentTarget.value,
      reported: true,
      creatorId: this.props.currentTreasure.creatorId,
    });
  }

  render() {
    const {
      currentTreasure, openModal, closeModal, report,
    } = this.props;
    let content;
    if (currentTreasure) {
      if (currentTreasure.type === 'media') {
        content = <ImageContainer treasure={currentTreasure} />;
      } else {
        content = <h1 className="treasure-text">{ currentTreasure.url }</h1>;
      }
    }

    return (
      <div className="retrieve-treasure-wrapper">
        { content }
        <br />
        <input type="text" onChange={this.update()} value={this.state.reportMessage} />
        <button type="submit" onClick={this.handleReport}>Report Treasure</button>
      </div>
    );
  }
}

export default RetrieveTreasure;
