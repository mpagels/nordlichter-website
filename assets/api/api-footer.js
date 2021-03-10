import Svg from '../../components/util/Svg'
import FacebookSVG from '../svgs/footer/facebook.svg'

const footer = [
  {
    title: 'Sprechzeiten:',
    infos: [
      'Mo - Do: 07:00 - 19:00',
      'Fr: 07:00 - 18:00',
      'Termine nach Vereinbarung',
    ],
  },
  {
    title: 'Kontakt:',
    infos: [
      `Hartkirchener Chaussee 3
        25469 Halstenbek`,
      `Telefon: 04101 43 233`,
      `Fax: 04101 37 93 41`,
      `Mail: info@nordlichter-halstenbek.de`,
    ],
  },
  {
    title: 'Besuchen Sie uns auf Facebook!',
    infos: (
      <Svg>
        <FacebookSVG />
      </Svg>
    ),
  },
  {
    title: 'Impressum',
    infos: [
      `Die Nordlichter - Praxis für Physiotherapie
        Hartkirchener Chaussee 3
        25469 Halstenbek`,
      `Inhaber & Geschäftsführer:
        Torben Petersen-Lund`,

      `Telefon: 04101 43 233`,
      `Fax: 04101 37 93 41`,

      `Mail: info@nordlichter-halstenbek.de`,
      `www.nordlichter-halstenbek.de`,
      `IBAN: DE74 2219 1405 0079 8046 90`,
    ],
  },
]

export default footer
