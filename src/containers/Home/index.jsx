import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom";

import axios from "axios"

import { 
  Container, 
  Imagem,   
  InputLabel, 
  Input
} from "./styles"

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

 const App = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser (){

    const {data: newUser} = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value, 
      age: inputAge.current.value
    })
   setUsers([ ... users, newUser])
   history.push("/usuarios") 
  }

  return (
    <Container>

      <Imagem alt="people-imagem" src={People}/>

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" ref={inputName}></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" ref={inputAge}></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow-right" src={Arrow}/>
        </Button>

      </ContainerItens>

    </Container>
  )
 }

 export default App