import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-bottom: 16px;
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 400;
  }
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
`
