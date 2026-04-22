import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'


export default function YouToubePage() {
     const appTitle = 'Die Nordlichter - Unser Partner'
  return (
  <Layout>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
  <PageWrapper> 

      <Main>
        <WelcomeSection>
          <Title>✨ Willkommen bei meine lymphdrainage! ✨</Title>
          <Subtitle>
            Hier findest du einen Kanal voller Motivation und praktischer Selbsthilfe
            für dein Leben mit einer Lympherkrankung.
          </Subtitle>
          <Header>
        <HeaderInner>
          <Logo src={"images/logo.jpg"} alt="Meine Lymphdrainage Logo" />
        </HeaderInner>
      </Header>
        </WelcomeSection>

        <PhilosophySection>
          <p>
            Hier geht es um <strong>Selbstverantwortung</strong>, <strong>Selbstvertrauen</strong> und
            kleine Schritte, die Großes bewirken können.
          </p>
          <p>
            Du lernst Techniken und Übungen kennen, die leicht in deinen Alltag passen
            und dir helfen, dich wohler und freier zu fühlen.
          </p>
        </PhilosophySection>

        <MottoSection>
          <MottoText>
            👉 „Gehe deinen Weg zu mehr Gesundheit und behandle deine Erkrankung
            besser als dein Arzt und dein Therapeut."
          </MottoText>
        </MottoSection>

        <GoalsSection>
          <GoalsIntro>Mein Ziel ist es, dich zu ermutigen:</GoalsIntro>
          <GoalsList>
            <GoalCard emoji="🌱" text="Vertrauen in deinen Körper aufzubauen" />
            <GoalCard emoji="💪" text="deine eigene Stärke zu entdecken" />
            <GoalCard emoji="💚" text="und den Weg in ein selbstbestimmtes Leben zu gehen." />
          </GoalsList>
        </GoalsSection>

        <ClosingSection>
          <p>
            Denn Heilung bedeutet nicht nur Therapie – es bedeutet auch, dir selbst
            liebevoll zur Seite zu stehen. <strong>Gemeinsam schaffen wir das!</strong>
          </p>
        </ClosingSection>

        <VideoSection>
          <VideoTitle>Lerne den Kanal kennen</VideoTitle>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/3h0bdtojEk8"
              title="Meine Lymphdrainage – Kanalvorstellung"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </VideoWrapper>
        </VideoSection>

        <CTASection>
          <YouTubeButton
            href="https://www.youtube.com/@Meine-Lymphdrainage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
            Zum YouTube-Kanal
          </YouTubeButton>
        </CTASection>
      </Main>
    </PageWrapper>
    </Layout>
  );
}

function GoalCard({ emoji, text }) {
  return (
    <GoalCardWrapper>
      <GoalEmoji>{emoji}</GoalEmoji>
      <GoalText>{text}</GoalText>
    </GoalCardWrapper>
  );
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;

  font-family: "Nunito Sans", sans-serif;
  color: #3b2e1e;
`;

const Header = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e8e0d4;
`;

const HeaderInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 5rem;
  width: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 7rem;
  }
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;

  @media (min-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const WelcomeSection = styled.section`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Title = styled.h1`
  font-family: "Lora", serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b5c4a;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PhilosophySection = styled.section`
  margin-bottom: 3.5rem;

  p {
    font-size: 1.5rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }

    strong {
      font-weight: 700;
    }
  }
`;

const MottoSection = styled.section`
  margin-bottom: 3.5rem;
  background: #f0ebe3;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e8e0d4;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const MottoText = styled.p`
  text-align: center;
  font-family: "Lora", serif;
  font-size: 1.25rem;
  font-weight: 600;
  font-style: italic;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GoalsSection = styled.section`
  margin-bottom: 3.5rem;
`;

const GoalsIntro = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const GoalsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GoalCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #fff;
  border-radius: 0.75rem;
  padding: 1.25rem;
  border: 1px solid #e8e0d4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const GoalEmoji = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const GoalText = styled.p`
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ClosingSection = styled.section`
  margin-bottom: 4rem;
  text-align: center;

  p {
    font-size: 1rem;
    line-height: 1.7;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }

    strong {
      font-weight: 700;
    }
  }
`;

const VideoSection = styled.section`
  margin-bottom: 4rem;
`;

const VideoTitle = styled.h2`
  font-family: "Lora", serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e0d4;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

const CTASection = styled.section`
  text-align: center;
  margin-bottom: 5rem;
`;

const YouTubeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #c4302b;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(196, 48, 43, 0.3);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid #e8e0d4;
  padding: 2rem 0;
  text-align: center;
  font-size: 0.875rem;
  color: #6b5c4a;
`;