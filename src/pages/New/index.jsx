import { Header } from '../../components/header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from './styles'

export function New(){
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"> <FiArrowLeft /> Return</Link>
            <h1> Create note</h1>
          </header>
          <div className='primaryInput'>  
            <Input placeholder="Title"/>
            <Input placeholder="Your rating (0 to 5)"/>
          </div>
        
          <Textarea placeholder="comments"/>
         
          <Section title="Markers">
            <div className='tags'>
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="New markers"/>
            </div>
          </Section>
          <div className='buttons'>
            <Button id="del" title="Delete" />
            <Button title="Save" />
          </div>
          
        </Form>
      </main>
    </Container>
  )
}