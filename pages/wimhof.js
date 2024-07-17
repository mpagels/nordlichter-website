import styled from 'styled-components'
import Layout from '../components/Layout'
import wimhof_1 from '../assets/jpg/nordlichter/wimhof/wimhof_1.webp'
import wimhof_2 from '../assets/jpg/nordlichter/wimhof/wimhof_2.jpg'
import wimhof_3 from '../assets/jpg/nordlichter/wimhof/wimhof_3.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function WimHof() {
  return (
    <Layout>
      <Headline>Die Wimhof Methode</Headline>
      <GridWrapper>
        <GridListItem>
          <GridHeadline>
            Deine chronischen <span>Entzündungen</span> und{' '}
            <span>Schmerzen plagen</span> dich?
          </GridHeadline>
          <ImageWrapper>
            <ImageComponent src={wimhof_1} alt="Mann mit Rückenschmerzen" />
          </ImageWrapper>
          <GridParagraph>
            <span>Verringere deine Schmerzen</span> sofort und nachhaltig! Ohne
            Risiken, Medikamente und Nebenwirkungen!{' '}
            <span>Es steckt alles in dir!</span>
          </GridParagraph>
        </GridListItem>
        <GridListItem>
          <GridHeadline>
            Dein <span>Stress</span> überrumpelt dich{' '}
            <span>wieder und wieder</span>?
          </GridHeadline>
          <ImageWrapper>
            <ImageComponent src={wimhof_2} alt="Mann mit Rückenschmerzen" />
          </ImageWrapper>
          <GridParagraph>
            Tauche tief in die Wogen deines Seins und <span>lass los</span>.
            Ergründe das Geheimnis deiner Seele und erlebe die Wunder deines
            Wesens auf eine Art, <span>die dir bisher verborgen blieb</span>
            die dir bisher verborgen blieb.
          </GridParagraph>
        </GridListItem>
        <GridListItem>
          <GridHeadline>
            Du hast kaum <span>Selbstvertrauen</span> und dir fehlt der
            <span> Mut</span>?
          </GridHeadline>
          <ImageWrapper>
            <ImageComponent src={wimhof_3} alt="Mann mit Rückenschmerzen" />
          </ImageWrapper>
          <GridParagraph>
            <span>Zerspreng</span> die Fesseln deiner Begrenzungen und{' '}
            <span>lass dein wahres Selbst erstrahlen</span>! Entfache das Feuer,
            das in deinem <span>Inneren</span> lodert!
          </GridParagraph>
        </GridListItem>
      </GridWrapper>
      <CTAHeader>Du willst mehr wissen?</CTAHeader>
      <CTABlock>
        Die <span>wissenschaftlich</span> anerkannte Methode des Niederländers
        <span> Wim Hof </span>
        besteht aus einer speziellen <span>Atemtechnik, Kältetraining</span> und
        einer stärkung des <span>Mindsets</span>. Mit diesen Werkzeugen wirst du
        <span> stark, gesund und glücklich</span>. Die Methode veränderte
        <span> mein Leben </span> und kann auch <span>Deines </span>
        verändern.
      </CTABlock>
      <CTAHeaderSmall>
        Erlebe es selbst und hole dir weiter Infos zu meinen Atemkursen und
        Workshops.
      </CTAHeaderSmall>
      <Link href="https://nordlife.info/" passHref target="_blank">
        <StyledLink>Infos auf nordlife.info</StyledLink>
      </Link>
    </Layout>
  )
}

const CTAHeader = styled.h3`
  font-size: 2.5em;
  margin-bottom: 5px;
  margin-top: 5px;
`
const CTAHeaderSmall = styled.h4`
  font-size: 1.5em;
  margin-bottom: 5px;
`

const CTABlock = styled.section`
  background-color: var(--infoBox-color-lightgrey);
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  font-weight: 300;
  font-size: 1.2em;
  max-width: 1000px;

  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`

const GridHeadline = styled.h2`
  font-size: 1.3em;
  text-align: center;
  font-weight: normal;

  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`
const GridListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
`

const GridParagraph = styled.p`
  text-align: center;

  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`

const GridWrapper = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 1000px;
  padding: 40px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  margin: 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 10px;
`

const ImageComponent = styled(Image)`
  border-radius: 30px;
`

const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 20px;
`

const StyledLink = styled.a`
  all: unset;
  background-color: #15bd77;
  padding: 15px;
  margin: 30px 0;
  border-radius: 10px;
  color: whitesmoke;
  width: 150px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.045),
    0 1.3px 5.3px rgba(0, 0, 0, 0.065), 0 2.4px 10px rgba(0, 0, 0, 0.08),
    0 4.2px 17.9px rgba(0, 0, 0, 0.095), 0 7.9px 33.4px rgba(0, 0, 0, 0.115),
    0 19px 80px rgba(0, 0, 0, 0.16);
`
