import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaPlay } from "react-icons/fa";

const HeroLayout = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  padding: 0 2rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4rem;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
    order: 2;
  }
`;

const Tagline = styled(motion.p)`
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1a237e;
    transform: translateY(-2px);
  }
`;

const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.div`
  width: 90%;
  height: 80vh;
  background: url("/images/hero-doctor.png") center center;
  background-size: cover;
  border-radius: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(44, 75, 218, 0.1);
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    color: var(--accent-color);
  }
`;

const Hero = () => {
  return (
    <HeroLayout>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Tagline>Nous sommes là pour vous</Tagline>
          <Title>
            Ce qui nous rend meilleurs vous rend meilleurs
          </Title>
          <Description>
            En tant que professionnels paramédicaux, notre engagement est d'accompagner 
            et de soutenir les victimes de violence avec bienveillance et expertise.
            Notre approche personnalisée garantit un accompagnement optimal.
          </Description>
          <ButtonGroup>
            <PrimaryButton>Prendre Rendez-vous</PrimaryButton>
            <PlayButton>
              <FaPlay />
            </PlayButton>
          </ButtonGroup>
        </motion.div>
      </HeroContent>
      <ImageSection>
        <HeroImage />
        <SocialLinks>
          <SocialIcon href="#" target="_blank">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <FaGoogle />
          </SocialIcon>
        </SocialLinks>
      </ImageSection>
    </HeroLayout>
  );
};

export default Hero;
