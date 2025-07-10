import Layout from '../components/Layout'
import styled from 'styled-components'
import HeadlineWithSvg from '../components/HeadlineWithSvg/HeadlineWithSvg'
import TreeWaySvg from '../assets/svgs/verordnungen/tree-way.svg'
import verordnungen from '../assets/api/api-verordnungen'
import HeadlineSvgInfo from '../components/HeadlineSvgInfo/HeadlineSvgInfo'
import GreyContentBox from '../components/GreyContextBox/GreyContentBox'
import SubHeadlineWithInfo from '../components/SubHeadlineWithInfo/SubHeadlineWithInfo'
import BottomSvg from '../assets/svgs/verordnungen/verordnung-ende.svg'
import ButtonToContactForm from '../components/ButtonToContactForm/ButtonToContactForm'
import nordlichter from '../assets/api/api-nordlichter'
import Head from 'next/head'
import PersonnelFile from '../components/PersonnelFile/PersonnelFile'
import Link from 'next/link'

export default function Verordnungen() {
  const appTitle = 'Die Nordlichter - Physiotherapeutische Behandlungen'
  return (
    <Layout>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <HeadlineWithSvg
        headline={'Osteopathie - Aktivierung von Selbstheilungskräften'}
      >
        <TreeWaySvg />
      </HeadlineWithSvg>
      <Text>
        Für eine mögliche <span>Kostenübernahme</span> fragen Sie bitte bei
        Ihrer Krankenkasse nach.
      </Text>
      <SubHeadlineWithInfo
        info={
          'Osteopathie ist ein manuelles Diagnose- und Behandlungskonzept, das den menschlichen Körper in seiner Gesamtheit betrachtet. Der Körper wird durch das Gefäß- und Nervensystem versorgt. Treten Spannungen und Einschränkungen auf, werden diese als Versorgungsstörung des Körpers aufgefasst. Davon können Knochen, Gelenke, Muskeln, Faszien und Organe betroffen sein.'
        }
      />
      <GreyContentBox
        text={[
          {
            normal:
              'Die Osteopathie versucht nun durch gezielte Anamnese und Aufspüren von Funktionsstörungen mit den Händen die Ursache zu behandeln. Dadurch wird die Selbstheilungskraft des Körpers aktiviert. Ziel ist dabei nicht nur die Behandlung von Symptomen, sondern die Lösung von Funktionsstörungen und Blockaden, die eine Krankheit herbeigeführt oder aufrecht erhalten haben.',
          },
        ]}
      />
      <Link
        href={'https://www.stueck-osteopathie.de/'}
        target="_blank"
        passHref
      >
        <StyledLink>Jetzt einen Termin vereinbaren!</StyledLink>
      </Link>
      <Headline>
        Lerne unsere Osteopathie Expertin in Halstenbek kennen
      </Headline>

      {nordlichter
        .filter((nordlicht) => nordlicht.name.includes('Brita'))
        .map((nordlicht, index) => (
          <PersonnelFile key={index} {...nordlicht} />
        ))}

      <Link
        href={'https://www.stueck-osteopathie.de/'}
        target="_blank"
        passHref
      >
        <StyledLink>Jetzt einen Termin vereinbaren!</StyledLink>
      </Link>
      <BottomSvg style={bottomSvgStyle} />
    </Layout>
  )
}

const bottomSvgStyle = {
  position: 'relative',
  bottom: '-2px',
  marginTop: '20px;',
}

const Headline = styled.h2`
  color: var(--font-color-darkgrey);
  font-weight: 900;
  text-align: center;
  font-size: 1.4em;
`

const Text = styled.p`
  padding: 0 24px;
  text-align: center;
  font-family: 'NL-normal';
  font-weight: regular;
  font-size: 1.2em;
  color: var(--font-color-darkgrey);

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
