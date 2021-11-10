import Svg from '../../components/util/Svg'
import BallonTreeWay from '../svgs/preise/ballonsTreesWay.svg'

const preise = {
  greyContent: [
    {
      normal: 'Auch ',
    },
    { highlight: 'ohne ' },
    {
      normal:
        'eine Verordnung können Sie etwas für Ihre Gesundheit tun, damit der Gang zum Facharzt erst gar nicht nötig wird oder wir Sie gleich an den richtigen verweisen können. Speziell für akute Verletzungen und Beschwerden, bei denen eine Ersteinschätzung wichtig ist, sind Sie bei uns an der ',
    },
    { highlight: 'richtigen ' },
    {
      normal: 'Adresse.',
    },
  ],
  normalContent:
    'Oder gönnen Sie sich selbst eine Auszeit vom Alltag und entspannen Sie bei einer Massage von unseren Fachleuten. Profitieren Sie am besten von einem Angebot im Sechser- oder Zehner Abo und freuen Sie sich jedes Mal auf die nächste Entspannungs-Einheit.',

  svg: (
    <Svg>
      <BallonTreeWay />
    </Svg>
  ),

  blueText:
    'Dies und vieles mehr können Sie bei uns für Ihre Gesundheit tun zu einem fairen Preis und mit aktuellem Fachwissen.',

  services: [
    {
      length: '30min',
      color: '--headcolor-services-normal',
      serviceName: 'Klassische Massage',
      price: '30',
      additionalInfos: 'Einmalige Behandlung',
    },
    {
      isBest: true,
      length: '30min',
      color: '--font-color-blue',
      serviceName: 'Klassische Massage',
      price: '168',
      priceAdditional: '/6x',
      additionalInfos: '6 Behandlungen',
      arrow: '-6%',
    },
    {
      length: '30min',
      color: '--headcolor-services-second',
      serviceName: 'Klassische Massage',
      price: '275',
      priceAdditional: '/10x',
      additionalInfos: '10 Behandlungen',
      arrow: '-9%',
    },
  ],
  newServices: {
    massages: [
      {
        title: 'Schmerz adé',
        description: '40 Minuten Massage',
        extras: ['Wärmepackung', '10% Rabatt auf den nächsten Termin'],
        price: {
          was: 'Statt 63 €',
          is: 'nur 57,90 €',
        },
      },
      {
        title: 'Schmerz lass nach!',
        description: '30 Minuten Massage',
        extras: ['Wärmepackung'],
        price: {
          was: 'Statt 52 €',
          is: 'nur 47,90 €',
        },
      },
      {
        title: 'Standart',
        description: '20 Minuten Massage',
        extras: ['Wärmepackung'],
        price: {
          is: 'nur 40 €',
        },
      },
    ],
  },
  additionalBlueText: [
    {
      highlight:
        'Kombinieren Sie Ihre Massage doch mit einer Wärmeanwendung für nur 10 €',
    },
  ],
}

export default preise
