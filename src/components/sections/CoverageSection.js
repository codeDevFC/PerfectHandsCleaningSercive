import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../../constants';

const CoverageWrapper = styled.section`
  background-color: ${colors.lightBlue};
  padding: 80px 0;
`;

const CoverageContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const CoverageInfo = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const CoverageText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const CoverageCTA = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Button = styled(motion.a)`
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PrimaryButton = styled(Button)`
  background-color: ${colors.primaryYellow};
  color: ${colors.primaryBlue};
  
  &:hover {
    background-color: #E9AE22;
  }
`;

const WhatsAppButton = styled(Button)`
  background-color: ${colors.green};
  color: ${colors.white};
  
  &:hover {
    background-color: #20B35A;
  }
`;

const EmergencyNote = styled(motion.p)`
  font-size: 0.9rem;
  
  a {
    color: ${colors.primaryBlue};
    text-decoration: underline;
    
    &:hover {
      color: ${colors.darkGray};
    }
  }
`;

const CoverageMap = styled(motion.div)`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapIcon = styled.div`
  font-size: 5rem;
  color: ${colors.primaryBlue};
  margin-bottom: 20px;
`;

const CoverageSection = () => {
  return (
    <CoverageWrapper id="coverage">
      <div className="container">
        <CoverageContent>
          <CoverageInfo>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Coverage Area
            </motion.h2>
            
            <CoverageText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We proudly serve a {CONTACT.COVERAGE}. Call our main line for a free, no-obligation quote or connect with us on WhatsApp for a quick consultation!
            </CoverageText>
            
            <CoverageCTA
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ButtonsContainer>
                <PrimaryButton 
                  href={CONTACT.WHATSAPP.LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone /> CALL US
                </PrimaryButton>
                
                <WhatsAppButton 
                  href={CONTACT.WHATSAPP.LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp /> WHATSAPP CONSULT
                </WhatsAppButton>
              </ButtonsContainer>
              
              <EmergencyNote>
                Emergency Support for existing clients: <a href={`tel:${CONTACT.EMERGENCY.TEL_LINK}`}>{CONTACT.EMERGENCY.NUMBER}</a>
              </EmergencyNote>
            </CoverageCTA>
          </CoverageInfo>
          
          <CoverageMap
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MapIcon>
              <FaMapMarkerAlt />
            </MapIcon>
            <p>Coverage area: {CONTACT.COVERAGE}</p>
          </CoverageMap>
        </CoverageContent>
      </div>
    </CoverageWrapper>
  );
};

export default CoverageSection;
