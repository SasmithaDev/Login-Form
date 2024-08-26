import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './FlipForm.css';

// Flip card with perspective for 3D effect
const FlipCard = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  perspective: 1000px; /* Perspective for 3D effect */

  @media (max-width: 768px) {
    width: 250px; /* Smaller width on smaller screens */
    height: 350px; /* Smaller height on smaller screens */
  }
`;

// Inner card that flips between front and back
const FlipCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

// Front of the flip card
const FlipCardFront = styled.div`
  background: transparent;
  backdrop-filter: blur(10px);
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Back of the flip card
const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(10px);
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Input field styles
const Input = styled.input`
  background: #ffffff20;
  color: #fff;
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  border-radius: 44px;
  border: 1px solid #ddd;
  outline: none;
  border: none;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

// Button styles
const Button = styled.button`
  padding: 10px;
  outline: none;
  margin-top: 20px;
  width: 30%;
  border-radius: 99px;
  border: none;
  background-color: #FF9874;
  color: #FFD7C4;
  margin-top: 9px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    outline: none;
    background-color: #FFD7c4;
    color: #FF9874;
  }

  @media (max-width: 768px) {
    width: 40%; /* Increase button width on smaller screens */
  }
`;

const FlipForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    
    <FlipCard>
        <FlipCardInner
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <FlipCardFront>
            <h2>Login</h2>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button>Login</Button>
            <a className='flip-btn-2' onClick={handleFlip}>I don&#39;t have an Account</a>
          </FlipCardFront>

          <FlipCardBack>
            <h2>Sign Up</h2>
            <Input type="text" placeholder="Username" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button>Sign Up</Button>
            <a className='flip-btn' onClick={handleFlip}>I have an Account</a>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
        );
};

export default FlipForm;
