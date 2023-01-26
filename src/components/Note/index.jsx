import { Container } from './styles'
import { Tag } from '../Tag'
import { Rate } from '../../components/Star'


export function Note({data, ...rest}) {
  return (
    <Container {...rest}>
      <div className="title"> 
        <h1>{data.title}</h1>
        <Rate star={data.rating}/>
      </div>
     
        <p>{data.description}</p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}