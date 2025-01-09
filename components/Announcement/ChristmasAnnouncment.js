export default function ChristmasAnnouncement() {
  return (
    <Announcement>
      <h2>Liebe Patienten,</h2>
      <p>
        die Praxis ist vom <span>23.12.2024</span> bis <span>01.01.2025</span>{' '}
        geschossen.
      </p>
      <p>
        Am <span>Donnerstag</span> den <span>02.01.25</span> und{' '}
        <span>Freitag</span> den <span>03.01.25</span> finden{' '}
        <strong>auschließlich</strong> Behandlungen bei Herrn C. Rupp statt.
      </p>
      <p>
        Ab <span>Montag</span> den <span>06.01.25</span> sind wir wieder für Sie
        da.
      </p>
      <p>
        Wir wünschen Ihnen und Ihrer Familie ein frohes Weihnachtsfest und einen
        guten Rutsch ins neue Jahr!{' '}
      </p>
      <p>Ihr Nordlicht-Team</p>
    </Announcement>
  )
}

const Announcement = styled(AboutUs)`
  background-color: #ede9ec;
`
