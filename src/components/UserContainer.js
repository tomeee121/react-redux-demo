import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer({userData, fetchUsers, loading, errorMsg}) {

  useEffect(() => {fetchUsers()},[])

  return (
    loading ? <h2>Loading...</h2> : errorMsg ? <h2>An error occured</h2> :
        <div>
          <br></br><p>Users from store (by Redux-Thunk):</p>
            { userData.map(user => <li>{user.name}</li> ) }
        </div>
  )
}


const mapStateToProps = state => {
    return {
      userData: state.users.users,
      loading: state.users.loading,
      errorMsg: state.users.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)