import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.WHITE}` : 'none'};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

  > input {
    width: 130px;
    height: 56px;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
