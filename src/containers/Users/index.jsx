import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

import axios from "axios"

import { 
  Container, 
  Imagem, 
  Users
} from "./styles"

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

 const AppUsers = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fecthUsers() {
      const {data: listUsers} = await axios.get("http://localhost:3000/users")
      
      setUsers(listUsers)
    }
    fecthUsers()
  }, [])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3000/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    
    setUsers(newUsers)
  }

  function back() {
    history.push("/")
  }

  return (
    <Container>

      <Imagem alt="people-imagem" src={Avatar}/>

      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

        <ul>
        {users.map(user => (

          <Users key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixeira"/>
              </button>
          </Users>

        ))}
      </ul>

      <Button onClick={back} isBack={true}> 
        <img alt="arrow-right" src={Arrow}/> Voltar
      </Button>

      </ContainerItens>

    </Container>
  )
 }

 export default AppUsers