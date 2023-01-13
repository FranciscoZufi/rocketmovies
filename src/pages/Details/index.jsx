import {Container, Logout, Content} from './styles'
import { Header } from '../../components/Header'
import { FiArrowLeft } from 'react-icons/fi'
import {AiOutlineClockCircle} from 'react-icons/all'

import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'



export function Details() {


  return (
    <Container>
      <Header/>
      <main>
        <Content>
      <Section>

      <Logout to='/home'>
            <FiArrowLeft /> Come back
          </Logout>
      <h1>A rede social</h1>
      <div>   
        <img src="https://github.com/franciscozufi.png" alt="Foto do usuário" />
        <p>Per Francisco Zufi</p>
        <AiOutlineClockCircle />
        <p>23/05/22 às 08:00</p>
      </div>
   
      <Section>
        <Tag title='express' />
        <Tag title='nodejs' />
      </Section>
      </Section>
        
          <p>Em uma noite de outono em 2003, Mark Zuckerberg (Jesse Eisenberg), analista de sistemas graduado em Harvard, se senta em seu computador e começa a trabalhar em uma nova ideia. Apenas seis anos e 500 milhões de amigos mais tarde, Zuckerberg se torna o mais jovem bilionário da história com o sucesso da rede social Facebook. O sucesso, no entanto, o leva a complicações em sua vida social e profissional.</p>
      
       </Content>
      </main>
    </Container>
    
  )
}