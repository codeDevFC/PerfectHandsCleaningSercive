import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles';
import { FaSink, FaBath, FaBuilding, FaBroom, FaTint, FaSprayCan } from 'react-icons/fa';
import { FaCalendarCheck, FaCalendarWeek, FaCalendarDay, FaCalendarAlt } from 'react-icons/fa';

const ServicesWrapper = styled.section`
  background-color: ${colors.white};
  padding: 80px 0;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${colors.lightBlue};
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${colors.primaryBlue};
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ScheduleTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: ${colors.primaryBlue};
  margin: 40px 0 30px;
  text-align: center;
`;

const ScheduleGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ScheduleCard = styled(motion.div)`
  background-color: ${colors.white};
  border: 2px solid ${colors.lightBlue};
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

const ScheduleIcon = styled.div`
  font-size: 1.8rem;
  color: ${colors.primaryYellow};
  margin-bottom: 10px;
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

const services = [
  { icon: <FaSink />, title: "Kitchen Cleaning" },
  { icon: <FaBath />, title: "Bathroom Cleaning" },
  { icon: <FaBuilding />, title: "Office Cleaning" },
  { icon: <FaBroom />, title: "Dusting" },
  { icon: <FaTint />, title: "Mopping" },
  { icon: <FaSprayCan />, title: "Vacuuming" }
];

const schedules = [
  { icon: <FaCalendarCheck />, title: "One Time" },
  { icon: <FaCalendarWeek />, title: "Weekly" },
  { icon: <FaCalendarDay />, title: "Bi-Weekly" },
  { icon: <FaCalendarAlt />, title: "Monthly" }
];

const ServicesSection = () => {
  return (
    <ServicesWrapper id="services">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Professional cleaning services for homes, apartments, and offices
        </SectionSubtitle>
        
        <ServicesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <ScheduleTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Flexible Scheduling Options
        </ScheduleTitle>
        
        <ScheduleGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {schedules.map((schedule, index) => (
            <ScheduleCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ScheduleIcon>{schedule.icon}</ScheduleIcon>
              <p>{schedule.title}</p>
            </ScheduleCard>
          ))}
        </ScheduleGrid>
      </div>
    </ServicesWrapper>
  );
};

export default ServicesSection;
