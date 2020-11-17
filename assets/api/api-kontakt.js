import KalenderSVG from '../svgs/leistungen/termin-kalender.svg'
import Svg from '../../components/util/Svg'

const footer = [
  {
    headline: 'Sie brauchen einen Termin ?',
    svg: (
      <Svg>
        <KalenderSVG />
      </Svg>
    ),
    info: [
      {
        normal:
          'Schreiben Sie uns eine E-Mail mit den wichtigsten Informationen:',
      },
    ],
  },
  {
    headline: `Ärztliche Verordnung?
    Private Verordnung?`,
    svg: (
      <Svg>
        <KalenderSVG />
      </Svg>
    ),
    info: [
      { normal: 'Möchten Sie eines unserer Angebote als Selbstzahler nutzen?' },
    ],
  },
  {
    headline: 'Bei ärztlichen Verordnungen: ',
    svg: (
      <Svg>
        <KalenderSVG />
      </Svg>
    ),
    info: [
      {
        normal:
          'Wann wurde die Verordnung ausgestellt? Was genau ist verordnet worden, wie oft und in welcher Frequenz?',
      },
    ],
  },
]

export default footer
