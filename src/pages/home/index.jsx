import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewNote, Button} from './styles'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/header'
import { Note } from '../../components/Note'
import { api } from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'


export function Home() {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])
  useEffect(() => {
    async function handleNotes (){
      const { data } = await api.get('/notes?title=')
      console.log({data})
      setNotes(data)
    }
    handleNotes(notes)
  },[])

  console.log({notes})
  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return (
    <Container>
      <Header />  
        <NewNote>
        <h2>My films</h2>
         
        <Button to="/New"><FiPlus/>
        Create note</Button>
      
       
      </NewNote>

      <Content>
        
        {
         notes.map(note => (
        <Note 
          key={String(note.id)}
          data={note} 
          onClick={() => handleDetails(note.id)}/>))
        }
        
      </Content>

    </Container>
  )
}