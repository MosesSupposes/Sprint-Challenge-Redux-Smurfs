import { connect } from 'react-redux'

import Bedroom from '../presentational/Bedroom'
import { addVillager } from '../../actions'

function mapDispatchToProps() {
    return { addVillager }
}

export default connect(null,  mapDispatchToProps())(Bedroom)