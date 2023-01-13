
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to='/profile'>
        <span>RocketMovies</span>
        <div>
          <strong>Francisco Zufi</strong>
          <Logout>
             Sair
          </Logout>
        </div>
        <img src="https://github.com/franciscozufi.png" alt="Foto do usuário" />
      </Profile>
    
    </Container>
  )
}