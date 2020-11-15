import KalenderSVG from '../svgs/leistungen/termin-kalender.svg'
import TrainingSVG from '../svgs/leistungen/training-mit-experte.svg'
import FoodListSVG from '../svgs/leistungen/ernaehrungsliste.svg'
import TreeSwingSVG from '../svgs/leistungen/baum-schaukel.svg'
import Svg from '../../components/util/Svg'

const verordnungen = {
  greyContent: [
    {
      normal: 'Sie sind bei einer ',
    },
    { highlight: 'gesetzlichen ' },
    {
      normal: 'Krankenkasse versichert und waren bei einem ',
    },
    { highlight: 'Facharzt' },
    {
      normal: '? Daraufhin haben Sie nach der Diagnosestellung eine ',
    },
    { highlight: 'Verordnung ' },
    {
      normal:
        'für physikalische Therapie bekommen? Dann vereinbaren Sie gleich Ihre ',
    },
    { highlight: 'Terminserie ' },
    {
      normal: 'bei uns.',
    },
  ],
  firstInfo: {
    headline: 'Warum wir der richtige Partner für Sie sind',
    info:
      'Du hast ein Ziel: Wieder gesund und fit zu werden. Wir stehen an Deiner Seite. Hier kommen drei Hinweise, für einen reibungslosen Ablauf bei uns:',
  },
}

export default verordnungen
