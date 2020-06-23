import React from 'react';
import AdminBarContainer from '../adminbar/admin_bar_container';
import TreasureItemContainer from './item_container';
import NavBarContainer from '../navbar/navbar_container';

class Collection extends React.Component {
  componentDidMount() {
    const { getAllTreasures, getUserTreasures, currentUser } = this.props;
    getAllTreasures();
    getUserTreasures(currentUser._id);
  }

  render() {
    const {
      allTreasures, userTreasures, admin, firstName
    } = this.props;

    return (
      <div className="collection-page">
        <NavBarContainer />
        <AdminBarContainer />
        <h1 className="collection-header">
          {firstName}
          &#39;s Treasures
        </h1>
        <div className="the-collection">
          { admin // show user items or admin items?
            ? allTreasures.map((treasure) => (
              <TreasureItemContainer key={treasure._id} treasure={treasure} />
            ))
            : userTreasures.map((treasure) => (
              <TreasureItemContainer key={treasure._id} treasure={treasure} />
            ))}
        </div>
      </div>
    );
  }
}

export default Collection;