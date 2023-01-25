import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewNote, Button} from './styles'


import { Header } from '../../components/header'
import { Note } from '../../components/Note'
import { api } from '../../services/api'


export function Home() {
  const notes = api.get('/notes')
  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return (
    <Container>
      <Header>  
      </Header>
        <NewNote>
        <h2>My films</h2>
         
        <Button to="/New"><FiPlus/>
        Create note</Button>
      
       
      </NewNote>

      <Content>
        
        { notes.map(note => (
        <Note 
          key={String(note.id)}
          data={note} 
          onClick={() => handleDetails(note.id)}/>))
        }
        
      </Content>

    </Container>
  )
}