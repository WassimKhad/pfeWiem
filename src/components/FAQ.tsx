import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import type { IconBaseProps } from "react-icons/lib";
import { FaChevronDown } from "react-icons/fa";

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Question = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  font-weight: 600;
  color: var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: #666;
  line-height: 1.8;
`;

const IconComponent = ({
  icon: Icon,
}: {
  icon: React.ComponentType<IconBaseProps>;
}) => <Icon />;

const faqData = [
  {
    question: "Que faire si je suspecte une violence sans preuve visible ?",
    answer:
      "Restez vigilant, documentez tout, et orientez vers des structures spécialisées.",
  },
  {
    question:
      "Comment préserver la confidentialité dans un environnement hospitalier ?",
    answer:
      "Assurez un espace privé pour les échanges, limitez l’accès au dossier médical.",
  },
  {
    question: "Quels documents officiels doivent être remplis ?",
    answer:
      "Le certificat médical préliminaire est essentiel, ainsi que la documentation dans le dossier médical.",
  },
  {
    question: "La confidentialité est-elle garantie ?",
    answer:
      "Absolument. La confidentialité est au cœur de notre pratique. Toutes les informations partagées sont protégées par le secret professionnel, sauf en cas de danger imminent nécessitant une intervention d'urgence.",
  },
  {
    question: "Où trouver des formations spécifiques ?",
    answer:
      "Consultez les institutions de santé publique et associations paramédicales en Tunisie.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <FAQContainer>
      {faqData.map((faq, index) => (
        <FAQItem key={index}>
          <Question
            $isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <IconComponent
              icon={FaChevronDown as React.ComponentType<IconBaseProps>}
            />
          </Question>
          <AnimatePresence>
            {openIndex === index && (
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </Answer>
            )}
          </AnimatePresence>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
