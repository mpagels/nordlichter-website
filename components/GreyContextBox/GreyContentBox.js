import styled from 'styled-components'
import Content from './Content'

export default function GreyContenxtBox({ text }) {
  return (
    <Box>
      <Content text={text} />
    </Box>
  )
}

const Box = styled.section`
  background-color: var(--infoBox-color-lightgrey);
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  max-width: 880px;
`
