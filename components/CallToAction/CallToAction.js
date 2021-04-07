import styled from 'styled-components'
import Link from 'next/link'
import Call2 from '../../assets/svgs/callToAction/call2.svg'
export default function CallToAction() {
  return (
    <ActionWrapper>
      Möchten Sie die 5 besten Tipps gegen Rückenschmerzen im Homeoffice
      erfahren?
      <Link href={'service/5tipps'}>
        <StyledButton>Klicken Sie hier für mehr Gesundheit</StyledButton>
      </Link>
      <Call2 style={bottomSvgStyle} />
    </ActionWrapper>
  )
}

const ActionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  height: 250px;
  max-width: 340px;
  box-shadow: 0 1.5px 2.2px rgba(0, 0, 0, 0.02),
    0 3.7px 5.3px rgba(0, 0, 0, 0.028), 0 7px 10px rgba(0, 0, 0, 0.035),
    0 12.5px 17.9px rgba(0, 0, 0, 0.042), 0 23.4px 33.4px rgba(0, 0, 0, 0.05),
    0 56px 80px rgba(0, 0, 0, 0.07);
  color: var(--font-color-darkgrey);
  text-align: center;
  margin: 35px 0;
  padding: 10px;
  font-size: 1.2em;
`
const StyledButton = styled.button`
  all: unset;
  background-color: #15bd77;
  padding: 15px;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.045),
    0 1.3px 5.3px rgba(0, 0, 0, 0.065), 0 2.4px 10px rgba(0, 0, 0, 0.08),
    0 4.2px 17.9px rgba(0, 0, 0, 0.095), 0 7.9px 33.4px rgba(0, 0, 0, 0.115),
    0 19px 80px rgba(0, 0, 0, 0.16);
`

const bottomSvgStyle = {
  position: 'absolute',
  bottom: '0',
  height: '100%',
  zIndex: '-1',
  opacity: '0.3',
}
