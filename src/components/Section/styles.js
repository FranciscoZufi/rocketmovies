import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 400;
  }
`
