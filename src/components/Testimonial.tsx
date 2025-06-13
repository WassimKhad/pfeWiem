import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--accent-color) 100%
    );
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: 3px solid var(--primary-color);
`;

const Quote = styled.p`
  font-style: italic;
  color: #666;
  margin: 1rem 0;
  line-height: 1.8;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorInfo = styled.div``;

const Name = styled.h4`
  color: var(--primary-color);
  margin: 0;
`;

const Role = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const Rating = styled.div`
  color: #ffd700;
  margin-bottom: 1rem;
`;

interface TestimonialProps {
  avatar: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  avatar,
  quote,
  name,
  role,
  rating,
}) => {
  return (
    <TestimonialCard
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Avatar src={avatar} alt={name} />
      <Rating>
        {[...Array(rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </Rating>
      <Quote>{quote}</Quote>
      <Author>
        <AuthorInfo>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </AuthorInfo>
      </Author>
    </TestimonialCard>
  );
};

export default Testimonial;
