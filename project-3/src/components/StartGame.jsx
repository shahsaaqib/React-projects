/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Button } from '../styled/Button';
import { useState } from 'react';
const StartGame = ({ toggle }) => {
  const validToken = 'rollDice';
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleButtonClick = () => {
    if (token === validToken) {
      setError('');
      toggle();
    } else {
      setError('Invalid token! Please try again.');
    }
  };
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="Main Dice" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <p className="error">{error}</p>
        <label htmlFor="token">Token</label>
        <input
          type="text"
          name="token"
          placeholder="Enter Valid Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Button onClick={handleButtonClick}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

//css

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    input {
      margin-bottom: 20px;
      padding: 0 8px;
      height: 40px;
    }
    label {
      position: relative;
      bottom: -12px;
      right: 10px;
      background-color: white;
      padding: 0 10px;
    }
    .error {
      color: red;
      font-size: 24px;
      font-weight: 500;
      font-style: italic;
    }
  }
`;
