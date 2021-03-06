import { connect } from 'react-redux';
import Collection from './collection';
import {
  fetchTreasures,
  fetchUserTreasures,
} from '../../actions/treasure_actions';
import { getCurrentUser } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  allTreasures: Object.values(state.treasure.admin),
  userTreasures: Object.values(state.treasure.user),
  admin: (state.session.user.email === 'admin@krma.com'),
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTreasures: () => dispatch(fetchTreasures()),
  getUserTreasures: (userId) => dispatch(fetchUserTreasures(userId)),
  getCurrentUser: (userId) => dispatch(getCurrentUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
