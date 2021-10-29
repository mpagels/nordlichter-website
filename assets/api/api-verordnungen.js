import React from 'react'
import FirstTerminSVG from '../svgs/verordnungen/first-termin.svg'
import SelfMoneySVG from '../svgs/verordnungen/self-money.svg'
import TreatmentTimeSVG from '../svgs/verordnungen/treatment-time.svg'
import AppointmentSVG from '../svgs/verordnungen/appointment.svg'
import TimeUnitsSVG from '../svgs/verordnungen/time-units.svg'
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
  operationInfoNormal: [
    {
      headline: 'Der erste Termin',
      svg: (
        <Svg>
          <FirstTerminSVG />
        </Svg>
      ),
      info: [
        {
          normal: 'muss ',
        },
        { highlight: 'spätestens ' },
        {
          normal: 'spätestens nach 28 Tagen nach Ausstellung der Verordnung ',
        },
        { highlight: 'durchgeführt' },
        {
          normal: ' werden.',
        },
      ],
    },
    {
      headline: 'Bei gesetzlich Versicherten',
      svg: (
        <Svg>
          <SelfMoneySVG />
        </Svg>
      ),
      info: [
        {
          normal: 'ist ein ',
        },
        { highlight: 'Eigenanteil ' },
        {
          normal:
            'bei Beginn einer jeden Verordnung an die Praxis zu entrichten. Dieser Eigenanteil errechnet sich aus ',
        },
        { highlight: '10 € + 10% ' },
        {
          normal:
            'des Wertes der Verordnung. Selbstverständlich können Sie diesen Eigenanteil bei uns bequem per ',
        },
        { highlight: 'EC Karte ' },
        {
          normal: 'bezahlen.',
        },
      ],
    },
    {
      headline: 'Die Behandlungszeiten',
      svg: (
        <Svg>
          <TreatmentTimeSVG />
        </Svg>
      ),
      info: [
        {
          normal:
            'varieren je nach verordneter Leistung. Eine Einheit Krankengymnastik wird etwa mit 20 Minuten pro Sitzung eingeplant, längere Behandlungen wie manuelle Lymphdrainage sind mit Minutenangaben von 30,45 und 60 Minuten angegeben. Darin enthalten sind neben der Behandlung auch ein Zeitfenster zur Dokumentation der Behandlung sowie der Nacharbeit nach der Behandlung. Sollten Sie Fragen zu der Behandlung haben, sprechen Sie uns bitte an.',
        },
      ],
    },
  ],
  privatInfoBox: [
    {
      normal: 'Auch als ',
    },
    { highlight: 'privat ' },
    {
      normal:
        'Versicherter planen wir Ihre Therapie gerne bei uns. Bei Verordnungen dieser Art gibt es ein paar ',
    },
    { highlight: 'Unterschiede ' },
    {
      normal: 'zu gesetzlich Versicherten.',
    },
  ],
  operationInfoPrivat: [
    {
      headline: 'Bei der Terminvergabe',
      svg: (
        <Svg>
          <AppointmentSVG />
        </Svg>
      ),
      info: [
        {
          normal: 'erhalten Sie einen ',
        },
        { highlight: 'Behandlungsvertrag ' },
        {
          normal:
            'von uns in dem alle Leistungen und die damit verbundenden Kosten für Sie aufgelistet werden. Nach einer Unterschrift von Ihnen kann daraufhin die Therapie beginnen. Am ',
        },
        { highlight: 'Ende ' },
        {
          normal:
            'der Behandlungsserie erhalten Sie von uns eine Rechnung, mit der Sie die Rechnungssumme überweisen können und anschließend bei Ihrer ',
        },
        { highlight: 'Krankenversicherung einreichen ' },
        {
          normal: 'können.',
        },
      ],
    },
    {
      headline: 'Die Zeiteinheiten',
      svg: (
        <Svg>
          <TimeUnitsSVG />
        </Svg>
      ),
      info: [
        {
          normal:
            'erhalten Sie einen Behandlungsvertrag von uns in dem alle Leistungen und die pro Behandlung sind ',
        },
        { highlight: 'länger ' },
        {
          normal:
            'als bei gesetzlichlich Versicherten. Hier kommt es wieder darauf an was ingesamt ',
        },
        { highlight: 'verordnet ' },
        {
          normal: 'wurde.',
        },
      ],
    },
  ],
  attention: [
    {
      highlight:
        'Bitte beachten Sie, sollten Sie einen Termin nicht wahrnehmen können rufen Sie uns bitte umgehend an oder schreiben Sie uns eine E-Mail. Nicht rechtzeitig (24 Stunden vorher) abgesagte Termine müssen wir Ihnen privat in Rechnung stellen um die ausgefallene Zeit zu kompensieren.',
    },
  ],
}

export default verordnungen
