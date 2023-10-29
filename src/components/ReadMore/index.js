// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  MainContainer,
  Heading,
  SubHeading,
  Image,
  Description,
  CustomButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [IsReadMore, SetIsReadMore] = useState(false)

  const OnClickReadMore = () => {
    SetIsReadMore(prevState => !prevState)
  }
  const description = IsReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const ButtonText = IsReadMore ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to React</SubHeading>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <CustomButton onClick={OnClickReadMore}>{ButtonText}</CustomButton>
      </MainContainer>
    </AppContainer>
  )
}

export default ReadMore
