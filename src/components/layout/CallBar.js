import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaExclamationCircle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { colors } from '../../styles';
import { motion } from 'framer-motion';
import { CONTACT } from '../../constants';

const StyledCallBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.primaryYellow};
  padding: 10px 0;
  z-index: 1000;
`;

const CallBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const MainLine = styled.a`
  font-weight: 700;
  color: ${colors.primaryBlue};
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${colors.darkGray};
  }
`;

const ContactLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ContactLink = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EmergencySupport = styled(ContactLink)`
  color: ${colors.primaryBlue};

  &:hover {
    color: ${colors.darkGray};
  }
`;

const WhatsAppLink = styled(ContactLink)`
  color: ${colors.green};
  font-weight: 600;

  &:hover {
    filter: brightness(0.9);
  }
`;

const EmailLink = styled(ContactLink)`
  color: #EA4335;
  font-weight: 600;

  &:hover {
    filter: brightness(0.9);
  }
`;

const CallBar = () => {
  return (
    <StyledCallBar
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <CallBarContent>
          <MainLine href={CONTACT.WHATSAPP.LINK} target="_blank" rel="noopener noreferrer">
            <FaPhone /> CALL US: {CONTACT.MAIN_LINE.NUMBER} ({CONTACT.MAIN_LINE.LABEL})
          </MainLine>
          <ContactLinks>
            <EmergencySupport href={`tel:${CONTACT.EMERGENCY.TEL_LINK}`}>
              <FaExclamationCircle /> Emergency: {CONTACT.EMERGENCY.NUMBER}
            </EmergencySupport>
            <WhatsAppLink href={CONTACT.WHATSAPP.LINK} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </WhatsAppLink>
            <EmailLink href={CONTACT.EMAIL.LINK}>
              <FaEnvelope /> {CONTACT.EMAIL.ADDRESS}
            </EmailLink>
          </ContactLinks>
        </CallBarContent>
      </div>
    </StyledCallBar>
  );
};

export default CallBar;
