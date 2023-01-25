import { useAuth } from '../../hooks/auth'
import {  FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate} from 'react-router-dom';
import {  useState, useEffect } from 'react'
import { Container, Profile, Logout, Span } from "./styles";
import { Input } from '../Input';



export function Header(){
  const { signOut, user } = useAuth() 
  const navigate = useNavigate()
  function handleSignOut(){
    navigate('/')
    signOut()
}
const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

const [search, setSearch] = useState('')
const [notes, setNotes] = useState('')


useEffect(() => {
  async function fetchNotes(){
    const response = await api.get(`/notes?title=${search}`)
    setNotes(response.data)
  }
  fetchNotes(notes)
}, [search])
  return (
    <Container>
      <Span>RocketMovies</Span>
        <Input 
        type="text" 
        placeholder="Search by title" 
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
        /> 
        <div>
      <Profile to='/profile'>
          <strong>{user.name}</strong>
      </Profile>
          <Logout onClick={handleSignOut}>
             Leave
          </Logout>
        </div>
        <img src={avatarUrl} alt={user.name} />
    
    </Container>
  )
}