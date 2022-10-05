import Layout from '../components/Layout'
import styled from 'styled-components'
import Fullfilment from '../assets/svgs/jobs/fulfilment.svg'
import Helping from '../assets/svgs/jobs/helping.svg'
import Praxis from '../assets/svgs/jobs/praxis.svg'
import NewWays from '../assets/svgs/jobs/new-ways.svg'

export default function Jobs() {
  return (
    <Layout>
      <Headline>Werde ein Nordlicht!</Headline>
      <StyledLink href="https://nordlichter-jobs.de/" target="_blank">
        Besuche nordlichter-jobs.de
      </StyledLink>
      <GreyBoxWithContent>
        Als Praxis und als Therapeuten verbessern wir uns stetig, um die
        Probleme unserer Patienten noch besser lösen zu können. <br />
        Wir sind immer auf der{' '}
        <a href="https://nordlichter-jobs.de/" target="_blank">
          Suche
        </a>{' '}
        nach Menschen und Möglichkeiten, die uns weiterbingen. <br />
      </GreyBoxWithContent>
      <Subline>
        {' '}
        Bist du ebenfalls auf dieser{' '}
        <a href="https://nordlichter-jobs.de/" target="_blank">
          Suche
        </a>
        ?
      </Subline>
      <BenefitList>
        <ListItem>
          <SVGWrapper>
            <Fullfilment />
          </SVGWrapper>
          <p>Einer Möglichkeit, dich als Therapeut selbst zu verwirklichen?</p>
        </ListItem>
        <ListItem>
          <SVGWrapper>
            <Helping />
          </SVGWrapper>
          <p>Dein Wissen zu teilen, um noch mehr Menschen helfen zu können?</p>
        </ListItem>
        <ListItem>
          <SVGWrapper>
            <Praxis />
          </SVGWrapper>
          <p>
            Um in einer Praxis zu arbeiten, die das wertschätzt und honoriert,
            was du leistest?
          </p>
        </ListItem>
        <ListItem>
          <SVGWrapper>
            <NewWays />
          </SVGWrapper>
          <p>Die innovative Wege geht?</p>
        </ListItem>
      </BenefitList>
      <Subline>Besuche nordlichter-jobs.de und lerne uns kennen!</Subline>
      <StyledLink href="https://nordlichter-jobs.de/" target="_blank">
        Werde ein Nordlicht!
      </StyledLink>
    </Layout>
  )
}

const BenefitList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 600px;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;

  p {
    text-align: center;
  }
`

const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  margin: 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 2em;
`

const StyledLink = styled.a`
  all: unset;
  background-color: #15bd77;
  padding: 15px;
  margin: 5px 0 30px 0;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.045),
    0 1.3px 5.3px rgba(0, 0, 0, 0.065), 0 2.4px 10px rgba(0, 0, 0, 0.08),
    0 4.2px 17.9px rgba(0, 0, 0, 0.095), 0 7.9px 33.4px rgba(0, 0, 0, 0.115),
    0 19px 80px rgba(0, 0, 0, 0.16);
`

const SVGWrapper = styled.div`
  svg {
    width: 175px;
    height: 175px;
  }
`

const GreyBoxWithContent = styled.section`
  background-color: var(--infoBox-color-lightgrey);
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  font-weight: 300;
  font-size: 1.2em;

  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`

const Subline = styled.h2`
  color: var(--font-color-darkgrey);
  margin: 40px 30px;
  text-align: center;
  font-weight: 900;
  font-size: 1.2em;
`
