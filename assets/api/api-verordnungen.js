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
}

export default verordnungen
