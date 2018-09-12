import { connect } from 'react-redux'
import { addGame } from '../../actions'
import GameInput from '../GameInput'

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(addGame({ name })),
})

const wrappingFunction = connect(
  null,
  mapDispatchToProps
)

export default wrappingFunction(GameInput)
