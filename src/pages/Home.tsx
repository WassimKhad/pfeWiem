import styled from "styled-components";
import { FaUserMd, FaHospital, FaHandHoldingHeart } from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import ClinicAbout from "../components/ClinicAbout";
import StatCard from "../components/StatCard";
import Hero from "../components/Hero";
import TechSection from "../components/TechSection";

const StatsSection = styled.section`
  padding: 80px 32px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a237e 100%);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-color);
`;

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-color);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--primary-color);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  color: #666;
  font-size: 1.1rem;
`;

const Home = () => {
  const handlePlayVideo = () => {
    console.log("Play video clicked");
  };

  return (
    <>
      <Hero />

      <ClinicAbout
        videoThumbnail="/images/hero-doctor.png"
        onPlayVideo={handlePlayVideo}
      />

      <TechSection />

      <StatsSection>
        <StatsGrid>
          <StatCard
            icon={FaUserMd}
            value="24/7"
            label="Disponibilité"
            delay={0}
          />
          <StatCard
            icon={FaHospital}
            value="20+"
            label="Centres d'accueil"
            delay={0.2}
          />
          <StatCard
            icon={FaHandHoldingHeart}
            value="1000+"
            label="Personnes Accompagnées"
            delay={0.4}
          />
        </StatsGrid>
      </StatsSection>

      <ServicesSection>
        <SectionTitle>Nos Services</SectionTitle>
        <SectionSubtitle>
          Une approche complète et personnalisée pour accompagner les victimes
          de violence dans leur parcours de reconstruction.
        </SectionSubtitle>
        <Services />
      </ServicesSection>

      <TestimonialsSection>
        <SectionTitle>Notre Équipe</SectionTitle>
        <SectionSubtitle>
          Des professionnels dévoués et expérimentés pour vous accompagner à
          chaque étape de votre parcours.
        </SectionSubtitle>
        <TestimonialsGrid>
          <Testimonial
            avatar="/images/hero-doctor.png"
            quote="Spécialisée dans la prise en charge des victimes de violence, je m'engage à fournir un accompagnement bienveillant et professionnel pour aider chaque personne à retrouver confiance et sérénité."
            name="Wiem KHADRAOUI"
            role="Infirmière Spécialisée"
            rating={5}
          />
          <Testimonial
            avatar="/images/hero-amine.png"
            quote="Je suis un professionnel de santé formé et spécialisé dans l’accueil, l’écoute et le soin des femmes ayant subi des violences. Mon rôle est d’assurer une prise en charge globale et adaptée aux besoins de chaque patiente, en garantissant un accompagnement médical, psychologique et social."
            name="Mohamed Amine Ghalmi"
            role="Infirmier Spécialisé"
            rating={4}
          />
        </TestimonialsGrid>
      </TestimonialsSection>

      <FAQSection>
        <SectionTitle>Questions Fréquentes</SectionTitle>
        <SectionSubtitle>
          Retrouvez les réponses aux questions les plus fréquemment posées
          concernant notre accompagnement et nos services.
        </SectionSubtitle>
        <FAQ />
      </FAQSection>
    </>
  );
};

export default Home;
