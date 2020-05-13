import { connect } from 'react-redux';
import { createTreasure } from '../../actions/treasure_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateQuote from './create_quote';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    errors: state.errors.treasure,
});

const mapDispatchToProps = (dispatch) => ({
    createTreasure: (treasure) => dispatch(createTreasure(treasure)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuote);