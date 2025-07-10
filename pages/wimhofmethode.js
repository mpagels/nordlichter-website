import styled from 'styled-components'
import Layout from '../components/Layout'
import Image from 'next/image'
import PersonnelFile from '../components/PersonnelFile/PersonnelFile'
import nordlichter from '../assets/api/api-nordlichter'
import Link from 'next/link'

export default function WimHofMethodePage() {
  return (
    <Layout>
      <Headline>Die Wim Hof Methode</Headline>
      <PageWrapper>
        <InfoTextWithBlueHighlights>
          Die <span>wissenschaftlich</span> anerkannte Methode des Niederländers{' '}
          <span>Wim Hof</span> besteht aus einer speziellen{' '}
          <span>Atemtechnik, Kältetraining</span> und einer stärkung des{' '}
          <span>Mindsets</span>. Mit diesen Werkzeugen wirst du{' '}
          <span>stark, gesund und glücklich</span>. Die Methode veränderte{' '}
          <span>mein Leben</span> und kann auch <span>Deines</span> verändern.
        </InfoTextWithBlueHighlights>
        <FlexWrapper>
          <Info>
            {' '}
            "Wir können es alle, wir haben es nur vergessen"{' '}
            <span>- Torben Petersen-Lund</span>
          </Info>
        </FlexWrapper>
        <FlexWrapperColumn>
          <h3>Möchtest du mehr erfahren?</h3>
          <Link href={'https://www.nordlife.info'} target="_blank" passHref>
            <StyledLink>Besuche nordlife.info</StyledLink>
          </Link>
        </FlexWrapperColumn>
        <FlexWrapper>
          <Image
            alt="Wim Hof Certicicate Logo"
            src="/images/wimhofinstructor.png"
            height={78}
            width={452}
          />
        </FlexWrapper>
        <FlexWrapper>
          {nordlichter
            .filter((nordlicht) => nordlicht.name.includes('Torben'))
            .map((nordlicht, index) => (
              <PersonnelFile key={index} {...nordlicht} />
            ))}
        </FlexWrapper>
      </PageWrapper>
    </Layout>
  )
}

const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  margin: 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 2em;
`

const InfoTextWithBlueHighlights = styled.section`
  background-color: var(--infoBox-color-lightgrey);
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  font-weight: 300;
  font-size: 1.2em;
  max-width: 890px;

  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const FlexWrapperColumn = styled(FlexWrapper)`
  flex-direction: column;
  align-items: center;
`
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const Info = styled.p`
  font-family: 'NL-normal';
  font-weight: 400;
  font-size: 1.1em;
  padding: 20px 0;
  text-align: center;
  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`

const StyledLink = styled.a`
  all: unset;
  background-color: #15bd77;
  padding: 15px;
  margin: 30px 0;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.045),
    0 1.3px 5.3px rgba(0, 0, 0, 0.065), 0 2.4px 10px rgba(0, 0, 0, 0.08),
    0 4.2px 17.9px rgba(0, 0, 0, 0.095), 0 7.9px 33.4px rgba(0, 0, 0, 0.115),
    0 19px 80px rgba(0, 0, 0, 0.16);
`
