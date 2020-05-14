import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editTreasure } from '../../actions/treasure_actions';
import ReportTreasure from './report_treasure';

const mapStateToProps = state => {
    return {
        treasure: state.treasure
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processReport: treasure => dispatch(updateTreasure(treasure)),
        editTreasure: (treasure) => dispatch(editTreasure(treasure)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportTreasure);