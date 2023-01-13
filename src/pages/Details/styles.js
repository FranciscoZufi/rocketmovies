import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`
export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  .head {
    color: ${({ theme }) => theme.COLORS.PINK};
    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  .tags {
    margin-top: 20px;
  }
  > button:first-child {
    align-self: flex-end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }
  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`
export const Logout = styled(Link)`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PINK};
  svg {
  }
`
