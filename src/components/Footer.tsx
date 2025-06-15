import React from "react";
import styled from "styled-components";
import type { IconBaseProps } from "react-icons/lib";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #1a237e;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.5rem;
    color: var(--accent-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const IconComponent = ({ icon: Icon }: { icon: React.ComponentType<IconBaseProps> }) => (
  <Icon />
);

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>À propos</h3>
          <p>
            Notre mission est d'accompagner et de soutenir les victimes de
            violence en leur fournissant les ressources et l'aide dont elles ont
            besoin.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Contacts d'urgence</h3>
          <ContactInfo>
            <IconComponent icon={FaPhone as React.ComponentType<IconBaseProps>} />
            <span>1899 (Violences Femmes Info)</span>
          </ContactInfo>
          <ContactInfo>
            <IconComponent icon={FaPhone as React.ComponentType<IconBaseProps>} />
            <span>119 (Enfance en danger)</span>
          </ContactInfo>
          <ContactInfo>
            <IconComponent icon={FaPhone as React.ComponentType<IconBaseProps>} />
            <span>197 (Police Secours)</span>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>Nous contacter</h3>
          <ContactInfo>
            <IconComponent icon={FaEnvelope as React.ComponentType<IconBaseProps>} />
            <span>contact@paramed-care.fr</span>
          </ContactInfo>
          <ContactInfo>
            <IconComponent icon={FaMapMarkerAlt as React.ComponentType<IconBaseProps>} />
            <span>Tunis, Tunisie</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>
          &copy; {new Date().getFullYear()} ParaMed Care. Tous droits réservés.
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
