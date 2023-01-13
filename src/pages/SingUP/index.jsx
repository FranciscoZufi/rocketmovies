import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'


export function SingUp() {
return (
  <Container>
    <Background/>
    <Form>
      <h1>RocketMovies</h1>
      <p>Application to track everything you watch.</p>

      <h2>Create account</h2>
      <Input placeholder="Name" type="text" icon={FiUser}/>
      <Input placeholder="E-mail" type="text" icon={FiMail}/>
      <Input placeholder="Password" type="password" icon={FiLock}/>
      <Button title="Register"/>
      <Link to="/"> <FiArrowLeft/> Back to LogIn</Link>
    </Form>
  </Container>
)
}