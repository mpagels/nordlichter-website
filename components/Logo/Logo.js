import styled from 'styled-components'
import nordlichterLogo from '../../assets/png/NordlichterLogo.png'

export default function Logo() {
  return <Nordlicht src={nordlichterLogo} alt="Logo" />
}

const Nordlicht = styled.img`
  width: 90%;
`
