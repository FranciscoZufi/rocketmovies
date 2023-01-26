import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewNote, Button} from './styles'
import { useNavigate } from 'react-router-dom'

import { Header} from '../../components/header'
import { Note } from '../../components/Note'
import { api } from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'


export function Home() {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])


  // const valorInput = IndexContextProvider()
  useEffect(() => {
    async function handleNotes (){
      const { data } = await api.get('/notes?title=')
      setNotes(data)
    }
    handleNotes(notes)
  },[])

//   useEffect(() => {
//   async function fetchNotes(){
//     const response = await api.get(`/notes?title=%${valorInput}%`)
//     setNotes(response.data)
//   }
//   fetchNotes(notes)
// }, [search])
  
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