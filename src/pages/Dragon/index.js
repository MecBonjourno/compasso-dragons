import React, {useState, useEffect} from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import api from '../../services/api'
import { FiChevronLeft } from 'react-icons/fi'
import './styles.css'
import dragonIcon from '../../assets/dragon.png';
import dragonWhiteIcon from '../../assets/dragonwhite.png';
// import dragonWhiteIcon from '../../assets/dragonwhite+.png';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogouButton';
import Swal from 'sweetalert2';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const Dragon = () => {
  const [ newType, setnewType ] = useState('')
  const [ newName, setnewName ] = useState('')
  const [ dragon, setDragon ] = useState(null);
    const { params } = useRouteMatch();

    useEffect(()=>{
        api.get(`/${params.id}`).then(response => {
            setDragon(response.data)
        })
    },[params.id])


    async function editDragon() {
        Swal.fire({
          title: 'Do you want to edit this dragon?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Yes!`,
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Edited!', '', 'success')
            api.put(`/${params.id}`, {
         name: capitalizeFirstLetter(newName),
          type: capitalizeFirstLetter(newType)
        })
          } else if (result.isDenied) {
            Swal.fire('Cancelled', '', 'info')
          }
        })
     }

     async function deleteDragon() {  
        Swal.fire({
          title: 'Do you really want to DELETE this dragon?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Yes!`,
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Dragon Deleted!', '', 'success')
            api.delete(`/${params.id}`)
          } else if (result.isDenied) {
            Swal.fire('Cancelled', '', 'info')
          }
        })    
      }

  return (
   <>
    { dragon &&  (<>
      <header >
       <LoginButton />
          <Link to="/">  <FiChevronLeft className="Icon" color='white' size={38}/> </Link> 
          <Link to="/"> <img src={dragonWhiteIcon} alt="Icon" style={{maxHeight: 40, maxWidth: 40}} /> </Link> 
       <LogoutButton /> 
      </header>

      <div className="container">
        <div className="avatar-flip">
          <img src={dragonIcon} alt="Icon" height="150" width="150"/>
        </div>
        <h2>{dragon.name}</h2>
        <h4>{dragon.type}</h4>
        <p>Dragon ID: {dragon.id}</p>
        <p>{dragon.createdAt}</p>
      </div>

        <form className="formEdit">
         <input className="allInputs" type="text" placeholder="Nome" value={newName} onChange={(e) => setnewName(e.target.value)}></input>  
         <input className="allInputs" type="text" placeholder="Tipo" value={newType} onChange={(e) => setnewType(e.target.value)}></input>  
        </form>

        <div className="divButtons" >
          <button className="buttonEdit" onClick={editDragon}>Edit</button>
          <button className="buttonDelete" onClick={deleteDragon}>Delete</button>
         </div>
      </>
    )}
    </>
  );
}

export default Dragon;
