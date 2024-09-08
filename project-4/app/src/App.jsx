import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult';

export const BASE_URL = 'http://localhost:9000';

const App = () => {
  const [foodData, setFoodDate] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(`${BASE_URL}/`);
        const json = await data.json();
        setFoodDate(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError('Unable to load data');
      }
    };

    fetchData();
  }, []);

  const searchFood = (e) => {
    setSearchInput(e.target.value);

    if (searchInput === '') setFilteredData(null);

    const filter = foodData?.filter((food) =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredData(filter);
  };

  const filteredFood = (type) => {
    if (type === 'all') {
      setFilteredData(foodData);
      setSelectedBtn(type);
      return;
    }
    const filter = foodData?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  const buttonArray = [
    {
      name: 'All',
      value: 'all',
    },
    {
      name: 'Breakfast',
      value: 'breakfast',
    },
    {
      name: 'Lunch',
      value: 'lunch',
    },
    {
      name: 'Dinner',
      value: 'dinner',
    },
  ];

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search Food"
            value={searchInput}
            onChange={searchFood}
          />
        </div>
      </TopContainer>
      <FilterContainer>
        {buttonArray.map((item) => (
          <Button
            key={item.value}
            isSelected={selectedBtn === item.value}
            onClick={() => filteredFood(item.value)}
          >
            {item.name}
          </Button>
        ))}
      </FilterContainer>
      <SearchResult foodData={filteredData} />
    </Container>
  );
};

export default App;

//css

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#f22f2f' : '#ff4343')};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f22f2f;
  }
`;
