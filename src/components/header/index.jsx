
import { Container, Profile, Logout, Span } from "./styles";


export function Header(){
  return (
    <Container>
      <Span>RocketMovies</Span>
      <input type="text" placeholder="Search by title" />
        <div>
      <Profile to='/profile'>
          <strong>Francisco Zufi</strong>
      </Profile>
          <Logout to='/'>
             Leave
          </Logout>
        </div>
        <img src="https://github.com/franciscozufi.png" alt="Foto do usuário" />
    
    </Container>
  )
}