import { useState } from 'react'
import styled from 'styled-components'

export default function BetreuungListItem({ description, more_infos, svg }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ListItemWrapper
      more_infos={more_infos}
      onClick={more_infos ? () => setIsOpen(!isOpen) : () => null}
    >
      <Description>
        <p>{description}</p>
        {more_infos && isOpen && (
          <InfoList>
            {more_infos.map((info) => (
              <li>{info}</li>
            ))}
          </InfoList>
        )}
      </Description>
      <SvgWrapper>{svg}</SvgWrapper>
    </ListItemWrapper>
  )
}

const ListItemWrapper = styled.li`
  margin: 15px 0;
  max-width: 600px;
  display: flex;
  border-radius: 15px;
  box-shadow: 0 1px 1.7px rgba(0, 0, 0, 0.008),
    0 2.4px 4.1px rgba(0, 0, 0, 0.012), 0 4.5px 7.8px rgba(0, 0, 0, 0.015),
    0 8px 13.8px rgba(0, 0, 0, 0.018), 0 15px 25.9px rgba(0, 0, 0, 0.022),
    0 36px 62px rgba(0, 0, 0, 0.03);
  ${(props) =>
    props.more_infos &&
    `
    cursor: pointer;
  :hover {
    box-shadow: 0 0.8px 2.1px rgba(0, 0, 0, 0.048),
      0 2px 5px rgba(0, 0, 0, 0.069), 0 3.8px 9.4px rgba(0, 0, 0, 0.085),
      0 6.7px 16.8px rgba(0, 0, 0, 0.101), 0 12.5px 31.3px rgba(0, 0, 0, 0.122),
      0 30px 75px rgba(0, 0, 0, 0.17);
  }`}
`

const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  & p {
    font-weight: bold;
    margin: 0;
  }
  background: white;
`

const SvgWrapper = styled.div`
  border-radius: 0 15px 15px 0;
  padding: 20px;
  width: 120px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    max-height: 100px;
  }
`

const InfoList = styled.ul`
  padding-left: 15px;
  margin-top: 10px;
  list-style-type: none;
  & li:before {
    content: '-';
  }
`
