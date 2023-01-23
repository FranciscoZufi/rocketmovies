import {Container, Logout, Content} from './styles'
import { Header } from '../../components/header'
import { FiArrowLeft } from 'react-icons/fi'
import {AiOutlineClockCircle} from 'react-icons/all'
import { Rate } from '../../components/Star'

import { Section } from '../../components/Section'
import { Tag } from '../../components/TagDetail'



export function Details() {


  return (
    <Container>
      <Header/>
      <main>
        <Content>
      <Section>
      <Logout to='/'>
            <FiArrowLeft /> Come back
          </Logout>
      <div className="title">
        <h1>A rede social</h1> 
        <Rate/>
      </div>
      
      <div className='head'>   
        <img src="https://github.com/franciscozufi.png" alt="Foto do usuário" />
        <p>Per Francisco Zufi</p>
        <AiOutlineClockCircle />
        <p>23/05/22 às 08:00</p>
      </div>
      <div className="tags">
        <Tag title='express' />
        <Tag title='nodejs' />
      </div>
      </Section>
        
          <p>Em uma noite de outono em 2003, Mark Zuckerberg (Jesse Eisenberg), analista de sistemas graduado em Harvard, se senta em seu computador e começa a trabalhar em uma nova ideia. Apenas seis anos e 500 milhões de amigos mais tarde, Zuckerberg se torna o mais jovem bilionário da história com o sucesso da rede social Facebook. O sucesso, no entanto, o leva a complicações em sua vida social e profissional.</p>
      
       </Content>
      </main>
    </Container>
    
  )
}