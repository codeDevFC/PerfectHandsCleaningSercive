import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { motion } from 'framer-motion';
import { COMPANY } from '../../constants';

const HeaderWrapper = styled.header`
  padding: 20px 0;
  background-color: ${colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 45px; /* Adjust based on sticky bar height */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.div`
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: ${colors.primaryBlue};
  }
`;

const Tagline = styled.p`
  font-size: 0.9rem;
  color: ${colors.darkGray};
  margin: 0;
  font-style: italic;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    color: ${colors.darkGray};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover, &.active {
      color: ${colors.primaryBlue};
    }
  }

  @media (max-width: 768px) {
    ul {
      margin-top: 15px;
    }

    li {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
`;

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Coverage', path: '/#coverage' },
  { name: 'Contact', path: '/#contact' }
];

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderContent>
          <Logo>
            <Link to="/">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {COMPANY.NAME}
              </motion.h1>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Tagline>{COMPANY.TAGLINE}</Tagline>
            </motion.div>
          </Logo>
          <Navigation>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link to={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </Navigation>
        </HeaderContent>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
