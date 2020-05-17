import React from 'react';
import ReportedTreasureContainer from "../report_inbox/reports/reported_treasure_container";

class ReportsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTreasures();
    }

    render() {
        const { treasures } = this.props;
        return (
            <div className="report-page" >
                <h1 className="reports-page-header">
                  Review for deletion.
                </h1>
                <div className="the-collection">
                { treasures.map(treasure => 
                    treasure.reported ? <ReportedTreasureContainer key={treasure._id} treasure={treasure} /> : null
                    )}
                </div>
            </div>
        );
    }
}

export default ReportsPage;
