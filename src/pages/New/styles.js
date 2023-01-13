import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';
  main {
    grid-area: content;
    overflow-y: auto;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    background-color: #0d0c0f;
    padding: 16px;
  }
`
export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;
  .primaryInput {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }
  .buttons {
    display: flex;
    gap: 40px;

    #del {
      background-color: #0d0c0f;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  header {
    display: block;

    margin-bottom: 36px;
    a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h1 {
      font-size: 36px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
