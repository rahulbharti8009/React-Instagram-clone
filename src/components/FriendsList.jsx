import React, { useContext, useEffect, useReducer } from 'react'
import noteContext from '../context/noteContext';

import Swal from 'sweetalert2'
import { useFetcher } from 'react-router-dom';

 const FriendsList = () => {
  const a = useContext(noteContext)
  // let call =()=> {
  //   console.log("calllllllllllllllllllllllllllllllllllllllllll")
  //   Swal.fire({
  //     popup: 'swal2-hide',
  //     title: 'Success!',
  //     text: 'Do you want to continue',
  //     // icon: 'swal2-icon-show',
  //     icon:'success',
  //     confirmButtonText: 'ok'
  //   })
  // }

  useEffect(()=> {
        a.update()
  }, [])
  return (
    <div>FriendsList {a.state.name }</div>
  )
}

export default FriendsList;
