import React, {useState, useEffect}  from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './styles.css'
import { useAuth0 } from "@auth0/auth0-react";
import dragonPlusIcon from '../../assets/dragon+.png';
import dragonWhiteIcon from '../../assets/dragonwhite+.png';
import { FiChevronRight } from 'react-icons/fi'
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogouButton';

const Home= () => {
    const [ newRepo ] = useState('')
    const [dragons,setDragons] = useState([])
    const { user } = useAuth0();


    useEffect(() => {
      async function loadDragons(){
        const response = await api.get('/')
        const list = response.data;

        var arr = [];
        for(let key in list){
        list[key]["key"] = key;
        arr.push(list[key]);
        }

        const listaComDados = arr.map((item)=> ({
            ...item,
            }
          ))

        listaComDados.sort(function (a, b) {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
          });

        setDragons(listaComDados)
    }
    loadDragons();
    }, [newRepo])


  return (
    <>
      <header >
       <LoginButton />
          
          <Link to="/createDragon"> <img src={dragonPlusIcon} alt="Icon" style={{maxHeight: 46, maxWidth: 46}} /> </Link> 

       <h3>{user.name}</h3>
       <LogoutButton /> 
      </header>

        

    <div className="DragonCard">
         {dragons.map(dragon => (
         <Link className="Link" key={dragon.name} to={`dragon/${dragon.id}`}> 
           <img src={dragonWhiteIcon} alt="Dragon" className="LinkImage"/>
            <div>
                <strong>{dragon.name}</strong>
            </div>
            <FiChevronRight className="Icon" size={24}/> 
         </Link>
         ))}
     </div>
    </>
  );
}

export default Home;
