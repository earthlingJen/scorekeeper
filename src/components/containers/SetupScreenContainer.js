import SetupScreen from '../SetupScreen'
import { deletePlayer, deleteAllPlayers } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  onDeletePlayer: index => dispatch(deletePlayer({ index })),

  onDeleteAllPlayers: () => dispatch(deleteAllPlayers({})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen)
