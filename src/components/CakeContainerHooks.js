import React from 'react'
import buyCake from '../redux/cake/cakeActions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const CakeContainer = (props) => {

const numOfCakes = useSelector(state => state.numOfCakes)
const dispatch = useDispatch()


  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    </div>
  )
}

export default CakeContainer