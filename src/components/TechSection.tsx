import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import type { IconBaseProps } from "react-icons/lib";
import { BulletList, BulletPoint } from "./ClinicAbout";

interface IconComponentProps {
  icon: React.ComponentType<IconBaseProps>;
}

const IconComponent: React.FC<IconComponentProps> = ({ icon: Icon }) => {
  return <Icon size={20} />;
};

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    order: 2;
    text-align: center;
  }
`;

const Subtitle = styled.span`
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: block;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #eee;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: #1a237e;
  }
`;

const TechSection: React.FC = () => {
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter subscription logic here
  };

  return (
    <Section>
      <Container>
        <ImageWrapper
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/play-img.png"
            alt="Technologies Avancées dans les soins"
          />
        </ImageWrapper>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Subtitle>Signes d’alerte à surveiller</Subtitle>
            <Title>
              Certains signes doivent attirer l’attention du professionnel :
            </Title>
            <BulletList>
              <BulletPoint>
                Blessures multiples, répétées ou de formes inhabituelles.
              </BulletPoint>
              <BulletPoint>
                Incohérence entre les blessures et le récit de la patiente.
              </BulletPoint>
              <BulletPoint>
                Comportement anxieux, silence inhabituel, ou présence d’un
                accompagnant trop intrusif.
              </BulletPoint>
              <BulletPoint>
                Consultations fréquentes sans cause claire.
              </BulletPoint>
              <BulletPoint>Historique d’antécédents de violence.</BulletPoint>
            </BulletList>

            <NewsletterForm onSubmit={handleEmailSubmit}>
              <EmailInput
                type="email"
                placeholder="Entrez votre email"
                aria-label="Adresse email"
              />
              <SubmitButton type="submit" aria-label="S'abonner">
                <IconComponent
                  icon={FaArrowRight as React.ComponentType<IconBaseProps>}
                />
              </SubmitButton>
            </NewsletterForm>
          </motion.div>
        </Content>
      </Container>
    </Section>
  );
};

export default TechSection;
