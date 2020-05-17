import { connect } from 'react-redux';
import ReportedTreasure from './reported_treasure';
import { deleteUser } from '../../../../actions/user_actions';
import { updateTreasure, deleteTreasure } from '../../../../actions/treasure_actions';

const mapStateToProps = (state, { treasure }) => ({
  user: state.session.user,
  treasure,
});

const mapDispatchToProps = (dispatch) => ({
  reportTreasure: (treasure) => dispatch(updateTreasure(treasure)),
  deleteTreasure: (treasureId) => dispatch(deleteTreasure(treasureId)),
  deleteSelectedUser: (userId) => dispatch(deleteUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportedTreasure);