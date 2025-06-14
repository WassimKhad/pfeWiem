import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import type { IconBaseProps } from "react-icons/lib";
import { FaUserShield, FaHandHoldingHeart, FaClinicMedical, FaBook } from "react-icons/fa";

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a237e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const Title = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ServiceButton = styled.button`
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

interface ServiceData {
  icon: IconType;
  title: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    icon: FaUserShield,
    title: "Protection et Sécurité",
    description: "Mise en place de mesures de protection immédiates et élaboration d'un plan de sécurité personnalisé.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Soutien Psychologique",
    description: "Accompagnement thérapeutique adapté aux traumatismes et suivi régulier pour la reconstruction.",
  },
  {
    icon: FaClinicMedical,
    title: "Soins Médicaux",
    description: "Évaluation médicale complète et coordination avec les services de santé spécialisés.",
  },
  {
    icon: FaBook,
    title: "Ressources et Formation",
    description: "Documentation, ateliers et formations pour l'autonomisation et la prévention.",
  }
];

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

interface ServiceComponentProps {
  service: ServiceData;
  index: number;
}

const ServiceComponent: React.FC<ServiceComponentProps> = ({ service, index }) => {
  const IconComponent = service.icon as React.ComponentType<IconBaseProps>;
  
  return (
    <ServiceCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <IconWrapper>
        <IconComponent size={32} color="white" />
      </IconWrapper>
      <Title>{service.title}</Title>
      <Description>{service.description}</Description>
      <ServiceButton>En savoir plus</ServiceButton>
    </ServiceCard>
  );
};

const Services: React.FC = () => {
  return (
    <ServicesGrid>
      {servicesData.map((service, index) => (
        <ServiceComponent
          key={index}
          service={service}
          index={index}
        />
      ))}
    </ServicesGrid>
  );
};

export default Services;
