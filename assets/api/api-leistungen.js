import KalenderSVG from '../svgs/leistungen/termin-kalender.svg'
import TrainingSVG from '../svgs/leistungen/training-mit-experte.svg'
import FoodListSVG from '../svgs/leistungen/ernaehrungsliste.svg'
import TreeSwingSVG from '../svgs/leistungen/baum-schaukel.svg'
import Svg from '../../components/util/Svg'

const leistungen = {
  attentionMsg:
    'Anlässlich der aktuellen Beschlüsse der Länder, gilt ab sofort eine allgemeine Maskenpflicht in der Praxis. Bitte tragen Sie beim Betreten der Praxis und während Ihrer Behandlung einen Mundschutz.',
  infoTexts: [
    {
      firstText:
        'Sie haben eine ärztliche Verordnung oder benötigen einen Termin bei unseren Physiotherapeuten?',
      svg: (
        <Svg>
          <KalenderSVG />
        </Svg>
      ),
      secondText: 'Wir helfen Ihnen!',
    },
  ],
}

export default leistungen
