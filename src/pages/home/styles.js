import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 105px 128px auto;
  grid-template-areas:
    'header header'
    'h2 newnote'
    'content content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Content = styled.div`
  grid-area: content;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 0 64px;
  overflow-y: auto;
`

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 8px;
  margin-top: 47px;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 207px;
  height: 48px;
  svg {
    margin-right: 8px;
  }
`
