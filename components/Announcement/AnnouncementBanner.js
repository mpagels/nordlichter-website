import styled from 'styled-components'

const BannerContainer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

const BannerText = styled.p`
  margin: 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const BannerLink = styled.a`
  color: white;
  text-decoration: underline;
  margin-left: 0.5rem;

  &:hover {
    color: #00aced;
  }
`

const AnnouncementBanner = () => (
  <BannerContainer>
    <BannerText>
      Du bist Physiotherapeut und suchst einen Ort, an dem Du dich WIRKLICH
      selbst verwirklichen kannst?
    </BannerText>
    <BannerText>Dann melde Dich bei uns!</BannerText>
    <BannerText>
      Werde ein Nordlicht --&gt;
      <BannerLink href="https://nordlichter-jobs.de" target="_blank">
        Bewirb dich auf nordlichter-jobs.de
      </BannerLink>
    </BannerText>
  </BannerContainer>
)

export default AnnouncementBanner
