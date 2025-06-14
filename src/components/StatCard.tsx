import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import type { IconBaseProps } from 'react-icons/lib';

const Card = styled(motion.div)`
  padding: 2rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

interface StatCardProps {
  icon: IconType;
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay = 0 }) => {
  const IconComponent = icon as React.ComponentType<IconBaseProps>;

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <IconWrapper>
        <IconComponent size={32} />
      </IconWrapper>
      <Title>{value}</Title>
      <Description>{label}</Description>
    </Card>
  );
};

export default StatCard;
