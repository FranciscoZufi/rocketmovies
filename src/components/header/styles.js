import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  gap: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 0 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  input {
    height: 50px;
    width: 350%;
    border-radius: 10px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 0;

    &::placeholder {
      color: #948f99;
    }
  }
`

export const Span = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.PINK};
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 80px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    justify-items: strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled(Link)`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
