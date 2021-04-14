import BeratungSVG from '../svgs/betrieblichesManagement/beratung.svg'
import WorkplaceSVG from '../svgs/betrieblichesManagement/workplace.svg'
import CourseSVG from '../svgs/betrieblichesManagement/course.svg'
import VortrageSVG from '../svgs/betrieblichesManagement/vortraege.svg'
import ProzenteSVG from '../svgs/betrieblichesManagement/prozente.svg'
import Svg from '../../components/util/Svg'

const betrieblichesManagement = {
  greyContent_1: [
    {
      normal: 'Sie sind als Firmeninhaber an einem ',
    },
    { highlight: 'betrieblichen ' },
    {
      normal:
        'Gesundheitsmanagement interessiert? Dann ist es von Vorteil, gemeinsam mit professioneller Hilfe, darüber nachzudenken.Krankheitsbedingte  ',
    },
    { highlight: 'Ausfälle ' },
    {
      normal:
        'Aufgrund von psychischen, psychosomatischen sowie Muskel-Skelett Erkrankungen sind in den letzten Jahren drastisch ',
    },
    { highlight: 'angestiegen ' },
    {
      normal: 'und führen zu erheblichen Kosten.',
    },
  ],
  greyContent_2: [
    {
      normal:
        'Gerne erarbeiten wir zusammen mit Ihnen ein individuelles Konzept für Ihr Unternehmen, welches langfristig die Gesundheit Ihrer Mitarbeiter ',
    },
    { highlight: 'verbessern, ' },
    {
      normal:
        'Fehltage und Folgekosten reduzieren und darüber die Zufriedenheit und Verbundenheit mit Ihnen als Arbeitgeber erhöhen kann. Über die individuellen Möglichkeiten und verschiedenen Modalitäten ',
    },
    { highlight: 'informieren ' },
    {
      normal: 'wir Sie gerne in einem persönlichen Gespräch!',
    },
  ],
  beratungen: [
    {
      description: 'Beratung und individuelleKonzepterstellung',
      svg: (
        <Svg>
          <BeratungSVG />
        </Svg>
      ),
    },
    {
      description: 'Therapie am Arbeitsplatz',
      more_infos: ['Physiotherapie', 'Massage'],
      svg: (
        <Svg>
          <WorkplaceSVG />
        </Svg>
      ),
    },
    {
      description: 'Kurse',
      more_infos: [
        'Fascientraining',
        'Mobilitätsworkshop',
        'Rückenkurse',
        'etc.',
      ],
      svg: (
        <Svg>
          <CourseSVG />
        </Svg>
      ),
    },
    {
      description: 'Impulsvorträge zu verschiedenen Themen',
      more_infos: [
        'Schmerz',
        'Stressmanagement',
        'Ernährungsberatung',
        'Eigenmaßnahmen',
      ],
      svg: (
        <Svg>
          <VortrageSVG />
        </Svg>
      ),
    },
    {
      description: 'Rabattaktionen für Ihre Mitarbeiter',
      more_infos: [
        'bei einer Selbstzahlerleistung in unserer Praxis in Halstenbek',
      ],
      svg: (
        <Svg>
          <ProzenteSVG />
        </Svg>
      ),
    },
  ],
  additionalText: [
    {
      highlight:
        'Lassen Sie sich in einem persönlichen Gespräch unsere Konzepte für Ihre Firma näher bringen und holen Sie das beste in Sachen Gesundheit für Ihre Mitarbeiter raus. Über eine Kontaktaufnahme würden wir uns sehr freuen.',
    },
  ],
}

export default betrieblichesManagement
