import React from 'react'
import KalenderSVG from '../svgs/leistungen/termin-kalender.svg'
import TrainingSVG from '../svgs/leistungen/training-mit-experte.svg'
import FoodListSVG from '../svgs/leistungen/ernaehrungsliste.svg'
import TreeSwingSVG from '../svgs/leistungen/baum-schaukel.svg'

const leistungen = {
  attentionMsg:
    'Anlässlich der aktuellen Beschlüsse der Länder, gilt ab sofort eine allgemeine Maskenpflicht in der Praxis. Bitte tragen Sie beim Betreten der Praxis und während Ihrer Behandlung einen Mundschutz.',
  infoTexts: [
    {
      firstText:
        'Sie haben eine Verordnung von einem Facharzt für Manuelle Therapie, Krankengymnastik oder Lymphdrainage?',
      svg: () => <KalenderSVG />,
      secondText:
        'Dann vereinbaren Sie einen Termin bei uns. Wir erstellen ihnen umgehend eine Behandlungsserie bei dem richtigen Therapeuten für Sie.',
    },
    {
      firstText:
        'Eine Verletzung nach einem Wettkampf oder ein "Ziehen" in der Wade beim Training? Lassen Sie uns sehen woran es liegt.',
      svg: () => <TrainingSVG />,
      secondText:
        'Unsere Experten in der Sportlerbetreuung kennen sich aus uns und bringen Sie wieder "back to the top".',
    },
    {
      firstText:
        'Sie haben eine Verordnung von einem Facharzt für Manuelle Therapie, Krankengymnastik oder Lymphdrainage?',
      svg: () => <FoodListSVG />,
      secondText:
        'Dann vereinbaren Sie einen Termin bei uns. Wir erstellen ihnen umgehend eine Behandlungsserie bei dem richtigen Therapeuten für Sie.',
    },
    {
      firstText:
        'Sie haben sich rein gehängt, alles gegeben und brauchen jetzt endlich mal etwas Besonderes für sich?',
      svg: () => <TreeSwingSVG />,
      secondText:
        'Vereinbaren Sie doch einen Massage Termin und gönnen Sie sich die Erholung. Sie haben es sich verdient!',
    },
  ],
}

export default leistungen
