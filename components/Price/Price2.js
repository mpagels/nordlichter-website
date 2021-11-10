import styled from 'styled-components'

export default function Price2({ title, description, extras, price, isSmall }) {
  return (
    <PriceWrapper isSmall={isSmall}>
      <InfoWrapper>
        <h2>{title}</h2>
        {!isSmall ? (
          <>
            <Description>{description}</Description>
            <Line />
            {extras ? (
              <ExtraList>
                {extras.map((extra) => (
                  <ListItem key={extra}>{extra}</ListItem>
                ))}
              </ExtraList>
            ) : (
              ''
            )}
          </>
        ) : (
          ''
        )}
      </InfoWrapper>

      <PriceArea>
        {price.was ? <Price>{price.was}</Price> : ''}
        <Price isNow>{price.is}</Price>
      </PriceArea>
    </PriceWrapper>
  )
}

const ExtraList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Line = styled.hr`
  border: 0;
  border-top-color: currentcolor;
  border-top-style: none;
  border-top-width: 0px;
  border-top: 1px solid #eee;
  width: 50%;
  margin-bottom: 30px;
`

const ListItem = styled.li`
  font-weight: 200;
  font-family: Roboto;
  width: 160px;
  margin: 7px 0;
  &::before {
    content: '+';
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`

const PriceWrapper = styled.section`
  display: flex;
  margin: 20px;
  height: ${({ isSmall }) => (!isSmall ? '450px' : 'auto')};
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  min-width: 300px;
  border-radius: 35px;
  box-shadow: 0px 0px 0.7px rgba(0, 0, 0, 0.017),
    0px 0px 1.7px rgba(0, 0, 0, 0.024), 0px 0px 3.1px rgba(0, 0, 0, 0.03),
    0px 0px 5.6px rgba(0, 0, 0, 0.036), 0px 0px 10.4px rgba(0, 0, 0, 0.043),
    0px 0px 25px rgba(0, 0, 0, 0.06);
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Price = styled.p`
  font-family: NL-normal;
  color: ${({ isNow }) => (isNow ? 'black' : '#C90000')};
  margin: 0;
  font-size: ${({ isNow }) => (isNow ? '2em' : '1em')};
`

const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 35px 35px;
  background-color: #f0f4f8;
  height: 125px;
`

const Description = styled.h3`
  font-weight: 300;
`
