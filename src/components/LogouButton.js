import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logoutIcon from '../assets/logout.png'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (

      <button onClick={() => logout()}>
        <img src={logoutIcon} alt="Icon" style={{maxWidth: 30,maxHeight: 30}}/>     
      </button>

    )
  )
}

export default LogoutButton