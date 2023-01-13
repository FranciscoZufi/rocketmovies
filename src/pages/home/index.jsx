import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewNote } from './styles'

import { Header } from '../../components/header'

import { Note } from '../../components/Note'


export function Home() {
  return (
    <Container>
      <Header>  
      </Header>
        <h2>My films</h2>
        <NewNote to='/new'>
       <FiPlus />
        Create note
      </NewNote>

      <Content>
        
        <Note data={{ title:'React', tags: [{id: '1', name:'react'}, {id: '2', name:'rocketseat'}]}}/>
        
      </Content>

     
    </Container>
  )
}