import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaHospital,
  FaHandHoldingHeart,
  FaChartLine,
} from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import ClinicAbout from "../components/ClinicAbout";
import StatCard from "../components/StatCard";
import Hero from "../components/Hero";

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
        videoThumbnail="./images/hero-doctor.png"
        onPlayVideo={handlePlayVideo}
      />

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
            value="50+"
            label="Centres Partenaires"
            delay={0.2}
          />
          <StatCard
            icon={FaHandHoldingHeart}
            value="1000+"
            label="Personnes Accompagnées"
            delay={0.4}
          />
          <StatCard
            icon={FaChartLine}
            value="95%"
            label="Taux de Satisfaction"
            delay={0.6}
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
            avatar="./images/hero-doctor.png"
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
