/* eslint-disable react/prop-types */
import styled from 'styled-components';

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {nums.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => {
              setSelectedNumber(value);
              setError('');
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
    font-size: 24px;
    font-weight: 500;
    font-style: italic;
  }

  P {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
`;
