import { createGlobalStyle } from 'styled-components';
export const colors = {
primaryBlue: '#1E40AF',
primaryYellow: '#FBBF24',
lightBlue: '#DBEAFE',
darkGray: '#1F2937',
white: '#FFFFFF',
green: '#25D366'  // WhatsApp green
};
export const GlobalStyle = createGlobalStyle`

{
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
line-height: 1.6;
color: ${colors.darkGray};
}
#root {
display: flex;
flex-direction: column;
min-height: 100vh;
}
main {
flex: 1;
}
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}
section {
padding: 80px 0;
}
h1, h2, h3, h4, h5, h6 {
font-weight: 700;
line-height: 1.2;
}
h1 {
font-size: 3rem;
}
h2 {
font-size: 2.5rem;
color: ${colors.primaryBlue};
margin-bottom: 1.5rem;
}
h3 {
font-size: 1.8rem;
margin-bottom: 1rem;
}
p {
margin-bottom: 1rem;
}
a {
text-decoration: none;
transition: all 0.3s ease;
}
button {
cursor: pointer;
border: none;
outline: none;
font-family: inherit;
}
.text-center {
text-align: center;
}
`;
