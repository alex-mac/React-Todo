import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions' // import actions for component
import Link from '../../components/Link' // imports the presentational layer, link

// map the state object to our component
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

// map the action to our component
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// connect the action, state, and presentational component to create the FitlerLink container
const FilterLink = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Link)

export default FilterLink