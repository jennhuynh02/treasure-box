import React from 'react';

class RetrieveTreasure extends React.Component {
    constructor(props) {
        super(props);

        this.state = { keyCount: this.props.keyCount };
        // NEED TO GET KEYCOUNT SLICE OF STATE HERE
    }
    
    componentDidMount() {
      debugger
      const { fetchTreasure, currentUser } = this.props;
      fetchTreasure(currentUser.id)
    }

        return (
          <div className="retrieve-treasure-wrapper">
            <button className="close-modal" onClick={this.props.closeModal}>
                X
            </button>
            
            <button>Report Treasure</button>
            <br />

          </div>
        );
    }
}

export default RetrieveTreasure;