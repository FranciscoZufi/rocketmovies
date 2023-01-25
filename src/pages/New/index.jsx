import { Header } from '../../components/header'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import {api} from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Container, Form } from './styles'

export function New(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [rating, setRating] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }
  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
  

  async function handleNewNote(){
    if(!title){
      return alert('Enter note title')
    }
    if(newTag){
      return alert("You left a tag in the field to add, but didn't click add. Click to add or leave the field empty.")
    }
    await api.post('/notes', {
      title,
      description,
      tags,
      rating
    })
    alert('Successfully created note')
    navigate(-1)
  }
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
            <Input placeholder="Title" onChange={e => setTitle(e.target.value)}/>
            <Input placeholder="Your rating (0 to 5)" onChange={e => setRating(e.target.value)}/>
          </div>
        
          <Textarea placeholder="comments" onChange={e => setDescription(e.target.value)}/>
         
          <Section title="Markers">
            <div className='tags'>
              {tags.map((tag, index) => (
                <NoteItem 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem 
            isNew 
            placeholder="New tag"
            onChange={e => setNewTag(e.target.value)} 
            value={newTag}
            onClick={handleAddTag}
           />
            </div>
          </Section>
          <div className='buttons'>
            <Button id="del" title="Delete" />
            <Button title="Save" onClick={handleNewNote}/>
          </div>
          
        </Form>
      </main>
    </Container>
  )
}