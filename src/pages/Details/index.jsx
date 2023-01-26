import {Container, Logout, Content} from './styles'
import { Header } from '../../components/header'
import { FiArrowLeft } from 'react-icons/fi'
import {AiOutlineClockCircle} from 'react-icons/all'
import { Rate } from '../../components/Star'
import { useParams } from   'react-router-dom'
import { Section } from '../../components/Section'
import { Tag } from '../../components/TagDetail'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'



export function Details() {
  const [data, setData] = useState(null)
  const { user } = useAuth()

  const params = useParams()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])
  return (
    <Container>
      <Header/>
      {data &&
        <main>
        <Content>
      <Section>
      <Logout to='/'>
            <FiArrowLeft /> Come back
          </Logout>
      <div className="title">
        <h1>{data.note.title}</h1> 
        <Rate star={data.note.rating}/>
      </div>
      
      <div className='head'>   
        <img src={avatarUrl} alt="Foto do usuário" />
        <p>{user.name}</p>
        <AiOutlineClockCircle />
        <p>23/05/22 às 08:00</p>
      </div>
      {
        data.tags &&
        <div className="tags">
        {
          data.tags.map(tag => (
            <Tag title={tag.name} key={String(tag.id)}/>
          ))
        }
      </div>
      }
      </Section>
        
          <p>{data.note.description}</p>
      
       </Content>
      </main>
      }
    </Container>
    
  )
}