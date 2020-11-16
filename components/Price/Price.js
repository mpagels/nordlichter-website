import styled from 'styled-components'

export default function Price({
  isBest,
  length,
  color,
  serviceName,
  price,
  priceAdditional,
  additionalInfos,
  arrow,
}) {
  return (
    <Wrapper>
      <Header isBest={isBest} color={color}>
        {length}
      </Header>
      <ContentWrapper>
        <Service>{serviceName}</Service>
      </ContentWrapper>
      <AdditionalInfosWrapper isBest={isBest}>
        {additionalInfos}
      </AdditionalInfosWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`
const Header = styled.div`
  background-color: var(${({ color }) => color});
  height: ${({ isBest }) => (isBest ? '60px' : '40px')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  font-size: 1.1em;
`
const ContentWrapper = styled.section`
  height: 200px;
  display: flex;
  flex-direction: column;
`

const Service = styled.h3`
  font-family: 'Open Sans';
  font-size: 1.4em;
  font-weight: 400;
`

const AdditionalInfosWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: ${({ isBest }) => (isBest ? '1.4em' : '1.2em')};
  font-weight: bold;
  background-color: var(--infoBox-color-lightgrey);
  width: 260px;
  height: ${({ isBest }) => (isBest ? '100px' : '50px')};
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
