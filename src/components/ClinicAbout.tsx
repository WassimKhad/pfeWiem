import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import type { IconBaseProps } from "react-icons/lib";
import { FaPlay } from "react-icons/fa";

const ClinicSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const ClinicContainer = styled.div`
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

const VideoContainer = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--accent-color);
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const ReadMore = styled.a`
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatBox = styled(motion.div)`
  background: ${(props) => props.color || "#f8f9fa"};
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin: 0;
  }
`;

interface ClinicAboutProps {
  videoThumbnail: string;
  onPlayVideo: () => void;
}

const IconComponent = ({ icon: Icon }: { icon: React.ComponentType<IconBaseProps> }) => (
  <Icon />
);

const ClinicAbout: React.FC<ClinicAboutProps> = ({
  videoThumbnail,
  onPlayVideo,
}) => {
  return (
    <ClinicSection>
      <ClinicContainer>
        <VideoContainer>
          <VideoThumbnail src={videoThumbnail} alt="Clinic video" />
          <PlayButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPlayVideo}
          >
            <IconComponent icon={FaPlay as React.ComponentType<IconBaseProps>} />
          </PlayButton>
        </VideoContainer>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Notre Mission</h2>
            <p>
              En tant que professionnels paramédicaux, nous nous engageons à
              offrir un accompagnement complet et bienveillant aux victimes de
              violence. Notre approche combine expertise médicale, soutien
              psychologique et accompagnement social.
            </p>
            <p>
              Notre équipe pluridisciplinaire travaille en étroite collaboration
              pour assurer une prise en charge optimale et personnalisée pour
              chaque personne que nous accompagnons.
            </p>
            <ReadMore href="#about">En savoir plus</ReadMore>
            <Stats>
              <StatBox
                color="#f0f3ff"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>1000+</h3>
                <p>Personnes Accompagnées</p>
              </StatBox>
              <StatBox
                color="#e8fff3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3>215+</h3>
                <p>Professionnels</p>
              </StatBox>
              <StatBox
                color="#fff8f0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3>315+</h3>
                <p>Centres Partenaires</p>
              </StatBox>
              <StatBox
                color="#f5f5f5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3>106+</h3>
                <p>Récompenses</p>
              </StatBox>
            </Stats>
          </motion.div>
        </Content>
      </ClinicContainer>
    </ClinicSection>
  );
};

export default ClinicAbout;
