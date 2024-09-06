/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';
import { useState } from 'react';
const RollDice = ({ currentDice, roleDice, resetScore }) => {
  const [showRules, setShowRules] = useState(false);
  return (
    <RollDiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dices/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to Roll</p>
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>Show Rules</Button>
      {showRules && <Rules />}
    </RollDiceContainer>
  );
};

export default RollDice;

const RollDiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  P {
    font-size: 24px;
    font-weight: 600;
  }
`;
