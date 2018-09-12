import GameScreen from '../GameScreen'
import { updateRoundscore, resetRoundScores, saveRound } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  onUpdateScore: (index, value) => dispatch(updateRoundscore({ index, value })),
  onSaveRound: () => dispatch(saveRound({})),
  resetRoundScores: () => dispatch(resetRoundScores({})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
