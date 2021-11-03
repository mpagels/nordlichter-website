import Image from 'next/image'
import styled from 'styled-components'

const Background = () => (
  <Wrapper>
    <Image
      alt="Mountains"
      src="/nordlichter-anker.png"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </Wrapper>
)

export default Background

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -5;
  opacity: 0.03;
  padding: 150px;
`
