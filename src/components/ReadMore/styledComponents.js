// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #334155;
`

export const Image = styled.img`
  width: 400px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: #334155;
  width: 400px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const CustomButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #1f81ff;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
  align-self: flex-start;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
