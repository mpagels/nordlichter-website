import styled from 'styled-components'

export default function BurgerMenu({ onClick, isOpen }) {
  return (
    <Wrapper onClick={onClick} isOpen={isOpen}>
      <Bar mt={12} />
      <Bar />
      <Bar mb={12} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  @media (max-width: 1050px) {
    position: absolute;
    top: 61px;
    right: 30px;

    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    min-width: 50px;
    min-height: 50px;
    background: white;
    ${(prop) =>
      !prop.isOpen &&
      `box-shadow: 0 0px 5.7px rgba(0, 0, 0, 0.022),
      0 0px 14.5px rgba(0, 0, 0, 0.031), 0 0px 29.6px rgba(0, 0, 0, 0.039),
      0 0px 61px rgba(0, 0, 0, 0.048), 0 0px 167px rgba(0, 0, 0, 0.07);`}
  }
`

const Bar = styled.div`
  width: 60%;
  height: 3px;
  border-radius: 10px;
  background-color: var(--font-color-darkgrey);
  ${(props) => props.mt && `margin-top: ${props.mt}px;`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}px;`}
`
