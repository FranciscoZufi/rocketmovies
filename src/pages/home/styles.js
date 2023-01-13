import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 105px 128px auto;
  grid-template-areas:
    'header'
    'newnote'
    'content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Content = styled.div`
  grid-area: content;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 0 64px;
  overflow-y: auto;
`

export const NewNote = styled.div`
  grid-area: newnote;

  margin-top: 47px;
  padding: 50px 100px 46px 100px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 32px;
    font-weight: 400;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 207px;
    height: 48px;

    svg {
      margin-right: 8px;
    }
  }
`
