import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../../styles';
import { FaPhone, FaExclamationCircle, FaWhatsapp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { COMPANY, CONTACT } from '../../constants';

// Styled components with enhanced styling
const HeroWrapper = styled.section`
  position: relative;
  height: 90vh;
  min-height: 650px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 64, 175, 0.85));
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${colors.white};
  text-align: center;
  max-width: 900px;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 2.2rem;
  margin-bottom: 40px;
  font-style: italic;
  font-weight: 600;
  color: ${colors.primaryYellow};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const HeroCTA = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(motion.a)`
  padding: 16px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
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

const EmergencyText = styled(motion.p)`
  font-size: 1.1rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 30px;
  
  a {
    color: ${colors.primaryYellow};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    
    &:hover {
      color: #E9AE22;
      text-decoration: underline;
    }
  }
`;

const NavigationArrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  backdrop-filter: blur(5px);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const LeftArrow = styled(NavigationArrow)`
  left: 20px;
`;

const RightArrow = styled(NavigationArrow)`
  right: 20px;
`;

const ImagePagination = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;
`;

const PaginationDot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? colors.primaryYellow : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.active ? colors.primaryYellow : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const CleaningFeatures = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 30px;
  backdrop-filter: blur(5px);
`;

const FeatureIcon = styled.div`
  color: ${colors.primaryYellow};
  font-size: 1.2rem;
`;

const FeatureText = styled.span`
  font-weight: 500;
`;

const imageVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
      scale: { duration: 1.2 }
    }
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      }
    };
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      delay: 0.2, 
      ease: "easeOut" 
    }
  }
};

const taglineVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      delay: 0.4, 
      ease: "easeOut" 
    }
  }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      delay: 0.6, 
      ease: "easeOut" 
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
  // Enhanced with better quality images
  const images = [
    '/images/cleaning-1.jpg',
    '/images/cleaning-2.jpg',
    '/images/cleaning-3.jpg',
    '/images/cleaning-4.jpg',
    '/images/cleaning-5.jpg'
  ];

  const features = [
    { icon: "✓", text: "Professional Staff" },
    { icon: "✓", text: "Quality Service" },
    { icon: "✓", text: "Affordable Rates" },
    { icon: "✓", text: "Satisfaction Guaranteed" }
  ];

  const [[currentImage, direction], setCurrentImage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImage(prev => [(prev[0] + 1) % images.length, 1]);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  // Functions to navigate through images
  const nextImage = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentImage(prev => [(prev[0] + 1) % images.length, 1]);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevImage = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentImage(prev => [(prev[0] - 1 + images.length) % images.length, -1]);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToImage = (index) => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    const newDirection = index > currentImage ? 1 : -1;
    setCurrentImage([index, newDirection]);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <HeroWrapper id="hero">
      <AnimatePresence initial={false} custom={direction}>
        <HeroImage
          key={currentImage}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
      </AnimatePresence>
      
      <HeroOverlay />
      
      <LeftArrow onClick={prevImage} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <FaArrowLeft />
      </LeftArrow>
      
      <RightArrow onClick={nextImage} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <FaArrowRight />
      </RightArrow>
      
      <ImagePagination>
        {images.map((_, index) => (
          <PaginationDot 
            key={index} 
            active={currentImage === index}
            onClick={() => goToImage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </ImagePagination>
      
      <HeroContent>
        <HeroTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {COMPANY.NAME}
        </HeroTitle>
        
        <HeroSubtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          {COMPANY.SLOGAN}
        </HeroSubtitle>
        
        <HeroTagline
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          {COMPANY.TAGLINE}
        </HeroTagline>
        
        <HeroCTA
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <ButtonsContainer>
            <PrimaryButton 
              href={CONTACT.WHATSAPP.LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone /> CALL US
            </PrimaryButton>
            
            <WhatsAppButton 
              href={CONTACT.WHATSAPP.LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> WHATSAPP CONSULT
            </WhatsAppButton>
          </ButtonsContainer>
          
          <EmergencyText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Existing client with an urgent issue? <a href={`tel:${CONTACT.EMERGENCY.TEL_LINK}`}>
              <FaExclamationCircle /> Call Emergency Support: {CONTACT.EMERGENCY.NUMBER}
            </a>
          </EmergencyText>
          
          <CleaningFeatures
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                variants={itemVariants}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureItem>
            ))}
          </CleaningFeatures>
        </HeroCTA>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
