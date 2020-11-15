import styled from 'styled-components'

export default function Content({ text }) {
  return (
    <NormalText>
      {text.map((content) =>
        content.highlight ? (
          <Highlight>{content.highlight}</Highlight>
        ) : (
          content.normal
        )
      )}
    </NormalText>
  )
}

const NormalText = styled.p`
  font-size: 1.2em;
  font-weight: lighter;
  font-weight: 200;
  text-align: center;
`

const Highlight = styled.span`
  color: var(--font-color-blue);
  font-weight: bold;
`
