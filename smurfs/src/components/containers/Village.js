import { connect } from 'react-redux'

import Village from '../presentational/Village'
import { gatherVillage } from '../../actions'

function mapStateToProps(state) {
    console.log(state)
    // return {
    //     smurfs: state.smurfs,
    //     error: state.error,
    //     fetchingSmurfs: state.fetchingSmurfs,
    //     addingSmurf: state.addingSmurf,
    //     updatingSmurf: state.updatingSmurf,
    //     deletingSmurf: state.deletingSmurf
    // }
    return {
        smurfs: ['dummy']
    }
}

function mapDispatchToProps() {
    return { gatherVillage }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps()
)(Village)