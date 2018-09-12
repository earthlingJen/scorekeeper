import { connect } from 'react-redux'
import SummaryScreen from '../SummaryScreen'

const mapStateToProps = state => ({
  players: state.players,
})

//const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(SummaryScreen)
