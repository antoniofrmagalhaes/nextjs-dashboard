import styled from 'styled-components'

export const ContentContainer = styled.div`
  height: 100%;
  @media screen and (min-width: 1024px) {
    margin-left: 260px;
  }
  @media screen and (min-width: 1600px) {
    margin-left: 300px;
  }
`

export const Content = styled.div`
  height: calc(100% - 100px);
  padding: 8px 16px;
  @media screen and (min-width: 1024px) {
    height: calc(100% - 50px);
  }
`
