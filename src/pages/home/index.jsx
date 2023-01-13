import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewNote} from './styles'

import { Header } from '../../components/header'

import { Note } from '../../components/Note'


export function Home() {
  return (
    <Container>
      <Header>  
      </Header>
        <NewNote>
        <h2>My films</h2>
        <button to="/New"> <FiPlus/>
        Create note</button>
       
      </NewNote>

      <Content>
        
        <Note data={{ title:'A rede social', description:'Filme mostra criação do Facebook', tags: [{id: '1', name:'facebook'}, {id: '2', name:'inovação'}]}}/>
        
      </Content>

     
    </Container>
  )
}