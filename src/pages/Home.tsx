import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import ClinicAbout from "../components/ClinicAbout";
import {
  FaUserMd,
  FaHospital,
  FaHandHoldingHeart,
  FaChartLine,
} from "react-icons/fa";

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--secondary-color);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
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

const StatsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a237e 100%);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--accent-color);
  }

  h3 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--secondary-color);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const AboutContent = styled.div`
  h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-color);
`;

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background: white;
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
    // Implémenter la logique de lecture vidéo ici
    console.log("Play video clicked");
  };

  return (
    <>
      <Hero />

      <ClinicAbout
        videoThumbnail="/images/hero-doctor.png"
        onPlayVideo={handlePlayVideo}
      />

      <ServicesSection>
        <SectionTitle>Nos Services</SectionTitle>
        <SectionSubtitle>
          Une approche complète et personnalisée pour accompagner les victimes
          de violence dans leur parcours de reconstruction.
        </SectionSubtitle>
        <Services />
      </ServicesSection>

      <StatsSection>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaUserMd />
            <h3>24/7</h3>
            <p>Disponibilité</p>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaHospital />
            <h3>50+</h3>
            <p>Centres Partenaires</p>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaHandHoldingHeart />
            <h3>1000+</h3>
            <p>Personnes Accompagnées</p>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaChartLine />
            <h3>95%</h3>
            <p>Taux de Satisfaction</p>
          </StatCard>
        </StatsGrid>
      </StatsSection>

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
            avatar="/wiem.png"
            quote="Mon rôle est d'assurer un suivi psychologique adapté et de coordonner avec les différents acteurs de santé pour une prise en charge optimale des victimes."
            name="Thomas Dubois"
            role="Psychologue Clinicien"
            rating={5}
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

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Identification</h3>
            <p>Reconnaître les signes de violence et évaluer la situation</p>
          </FeatureCard>
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Accompagnement</h3>
            <p>
              Soutien psychologique et orientation vers les services adaptés
            </p>
          </FeatureCard>
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Protection</h3>
            <p>Mise en place de mesures de protection et suivi personnalisé</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </>
  );
};

export default Home;
