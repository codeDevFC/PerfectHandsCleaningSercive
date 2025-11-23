import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles';
import { FaPhone, FaExclamationCircle, FaMapMarkerAlt, FaClock, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from '../../constants';

const ContactWrapper = styled.section`
  background-color: ${colors.white};
  padding: 80px 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${colors.primaryBlue};
  margin-top: 5px;
`;

const ContactText = styled.div`
  h3 {
    margin-bottom: 5px;
    color: ${colors.primaryBlue};
  }
  
  a {
    color: ${colors.darkGray};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${colors.primaryBlue};
    }
  }

  .whatsapp-link {
    color: ${colors.green};
    display: inline-flex;
    align-items: center;
    gap: 5px;
    
    &:hover {
      filter: brightness(0.9);
    }
  }

  .email-link {
    color: ${colors.primaryBlue};
    display: inline-flex;
    align-items: center;
    gap: 5px;
    
    &:hover {
      color: ${colors.darkGray};
    }
  }
`;

const ContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  label {
    font-weight: 500;
  }
  
  input, select, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
  }
  
  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 12px 24px;
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  
  &:hover {
    filter: brightness(0.9);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
*New Enquiry from Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Message:* ${formData.message}
    `.trim();
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create the WhatsApp link using the emergency number
    const whatsappLink = `https://wa.me/${CONTACT.EMERGENCY.TEL_LINK.replace('+', '')}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <ContactWrapper id="contact">
      <div className="container">
        <motion.h2 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        
        <motion.p 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1.2rem', marginBottom: '2rem' }}
        >
          Get in touch for a free quote or to schedule your cleaning service
        </motion.p>
        
        <ContactContainer>
          <ContactInfo>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactItem variants={itemVariants}>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactText>
                  <h3>Main Line</h3>
                  <p><a href={`tel:${CONTACT.MAIN_LINE.TEL_LINK}`}>{CONTACT.MAIN_LINE.NUMBER}</a> ({CONTACT.MAIN_LINE.LABEL})</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem variants={itemVariants}>
                <ContactIcon>
                  <FaExclamationCircle />
                </ContactIcon>
                <ContactText>
                  <h3>Emergency Support</h3>
                  <p><a href={`tel:${CONTACT.EMERGENCY.TEL_LINK}`}>{CONTACT.EMERGENCY.NUMBER}</a> ({CONTACT.EMERGENCY.LABEL})</p>
                </ContactText>
              </ContactItem>

              <ContactItem variants={itemVariants}>
                <ContactIcon>
                  <FaWhatsapp style={{ color: colors.green }} />
                </ContactIcon>
                <ContactText>
                  <h3>WhatsApp Consultation</h3>
                  <p>
                    <a 
                      href={CONTACT.WHATSAPP.LINK} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                    >
                      <FaWhatsapp /> Connect on WhatsApp
                    </a>
                  </p>
                </ContactText>
              </ContactItem>

              <ContactItem variants={itemVariants}>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactText>
                  <h3>Email</h3>
                  <p>
                    <a 
                      href={CONTACT.EMAIL.LINK}
                      className="email-link"
                    >
                      <FaEnvelope /> {CONTACT.EMAIL.ADDRESS}
                    </a>
                  </p>
                </ContactText>
              </ContactItem>
              
              <ContactItem variants={itemVariants}>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactText>
                  <h3>Service Area</h3>
                  <p>{CONTACT.COVERAGE}</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem variants={itemVariants}>
                <ContactIcon>
                  <FaClock />
                </ContactIcon>
                <ContactText>
                  <h3>Business Hours</h3>
                  <p>{CONTACT.BUSINESS_HOURS.WEEKDAYS}</p>
                  <p>{CONTACT.BUSINESS_HOURS.WEEKEND}</p>
                </ContactText>
              </ContactItem>
            </motion.div>
          </ContactInfo>
          
          <ContactForm>
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="service">Service Needed</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="residential">Residential Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </FormGroup>
              
              <SubmitButton 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> Send Message via WhatsApp
              </SubmitButton>
            </motion.form>
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactWrapper>
  );
};

export default ContactSection;
