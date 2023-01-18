import React from 'react'
import buyCake from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy a cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)