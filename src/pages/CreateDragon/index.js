import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogouButton';
import dragonIcon from '../../assets/dragon.png';
import { FiChevronLeft } from 'react-icons/fi'
import Swal from 'sweetalert2';
import './styles.css'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const CreateDragon = () => {
  const [ newType, setnewType ] = useState('')
  const [ newName, setnewName ] = useState('')

    async function  createDragon(){
        Swal.fire({
          title: 'Do you want to create this dragon?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Yes`,
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Created!', '', 'success')
            api.post(`/`, {name: capitalizeFirstLetter(newName), type: capitalizeFirstLetter(newType)})
          } else if (result.isDenied) {
            Swal.fire('Cancelled', '', 'info')
          }
        })
      }

  return (
    <>
    <header >
       <LoginButton />
          <Link to="/">  <FiChevronLeft className="Icon" size={40}/> </Link> 
          <Link to="/createDragon"> <img src={dragonIcon} alt="Icon" style={{maxHeight: 40, maxWidth: 40}} /> </Link> 
       <LogoutButton /> 
      </header>

    <div className="container">
    <h1>Create Dragon</h1>
      <form className="formEdit">
       <input className="allInputs" type="text" placeholder="Nome" value={newName} onChange={(e)=> setnewName(e.target.value)}></input>  
       <input className="allInputs" type="text" placeholder="Tipo" value={newType} onChange={(e)=> setnewType(e.target.value)}></input>  
      </form>
      <div className="divButtons">
      <button className="buttonDelete" onClick={createDragon}>Create</button>
      </div>
    </div>
    </>
  );
}

export default CreateDragon;
