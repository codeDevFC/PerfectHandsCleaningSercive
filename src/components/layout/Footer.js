import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { motion } from 'framer-motion';
import { FaPhone, FaExclamationCircle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { CONTACT, COMPANY } from '../../constants';

const FooterWrapper = styled.footer`
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const FooterTagline = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
`;

const CallButton = styled(ContactButton)`
  background-color: ${colors.primaryYellow};
  color: ${colors.primaryBlue};
  
  &:hover {
    background-color: #E9AE22;
  }
`;

const WhatsAppButton = styled(ContactButton)`
  background-color: ${colors.green};
  color: ${colors.white};
  
  &:hover {
    filter: brightness(0.9);
  }
`;

const EmailButton = styled(ContactButton)`
  background-color: #EA4335;
  color: ${colors.white};
  
  &:hover {
    filter: brightness(0.9);
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background-color: ${colors.primaryYellow};
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: ${colors.white};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${colors.primaryYellow};
    }
  }
  
  @media (max-width: 768px) {
    h3 {
      text-align: center;
      
      &:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    ul {
      text-align: center;
    }
  }
`;

const ContactInfo = styled.ul`
  li {
    margin-bottom: 15px;
  }

  .contact-icon {
    margin-right: 5px;
  }

  .whatsapp-icon {
    color: ${colors.green};
  }

  .email-icon {
    color: #EA4335;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FooterLogo>
              <h2>{COMPANY.NAME}</h2>
              <FooterTagline>{COMPANY.TAGLINE}</FooterTagline>
              <ContactButtons>
                <CallButton href={CONTACT.WHATSAPP.LINK} target="_blank" rel="noopener noreferrer">
                  <FaPhone /> Call Us
                </CallButton>
                <WhatsAppButton 
                  href={CONTACT.WHATSAPP.LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp
                </WhatsAppButton>
                <EmailButton 
                  href={CONTACT.EMAIL.LINK}
                >
                  <FaEnvelope /> Email
                </EmailButton>
              </ContactButtons>
            </FooterLogo>
          </motion.div>
          
          <FooterLinks>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FooterSection>
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/#services">Services</Link></li>
                  <li><Link to="/#coverage">Coverage</Link></li>
                  <li><Link to="/#contact">Contact</Link></li>
                </ul>
              </FooterSection>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FooterSection>
                <h3>Services</h3>
                <ul>
                  <li><Link to="/#services">Residential Cleaning</Link></li>
                  <li><Link to="/#services">Commercial Cleaning</Link></li>
                  <li><Link to="/#services">Office Cleaning</Link></li>
                  <li><Link to="/#services">Special Packages</Link></li>
                </ul>
              </FooterSection>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FooterSection>
                <h3>Contact Information</h3>
                <ContactInfo>
                  <li>
                    <strong>Main Line:</strong><br/>
                    <a href={`tel:${CONTACT.MAIN_LINE.TEL_LINK}`}>
                      <span className="contact-icon"><FaPhone /></span>
                      {CONTACT.MAIN_LINE.NUMBER}
                    </a> ({CONTACT.MAIN_LINE.LABEL})
                  </li>
                  <li>
                    <strong>Emergency Support:</strong><br/>
                    <a href={`tel:${CONTACT.EMERGENCY.TEL_LINK}`}>
                      <span className="contact-icon"><FaExclamationCircle /></span>
                      {CONTACT.EMERGENCY.NUMBER}
                    </a> ({CONTACT.EMERGENCY.LABEL})
                  </li>
                  <li>
                    <strong>WhatsApp:</strong><br/>
                    <a 
                      href={CONTACT.WHATSAPP.LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="contact-icon whatsapp-icon"><FaWhatsapp /></span>
                      Connect on WhatsApp
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong><br/>
                    <a href={CONTACT.EMAIL.LINK}>
                      <span className="contact-icon email-icon"><FaEnvelope /></span>
                      {CONTACT.EMAIL.ADDRESS}
                    </a>
                  </li>
                  <li>
                    <strong>Coverage Area:</strong><br/>
                    {CONTACT.COVERAGE}
                  </li>
                </ContactInfo>
              </FooterSection>
            </motion.div>
          </FooterLinks>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; {COMPANY.COPYRIGHT_YEAR} {COMPANY.NAME}. All rights reserved.</p>
        </FooterBottom>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
