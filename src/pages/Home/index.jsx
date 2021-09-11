import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { 
  Container, 
  Search, 
  Logo, 
  Wrapper, 
  CarouselTitle,
  Carousel
} 
from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true
};

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);

  function handleKeyPress(e){
    if(e.key === 'Enter'){
      setQuery(inputValue);
    }
  }

  return(
    <Wrapper>
      <Container>
          <Search>
            <Logo>
              <img src={logo} alt="logo do restaurante" />
            </Logo>  
              <TextField
                label='Pesquisar Restaurantes'
                outlined
                trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                <Input
                    value={inputValue}
                    onKeyPress={handleKeyPress} 
                    onChange={(e) => setInputValue(e.target.value) } 
                />
              </TextField>
              <CarouselTitle>Na sua Area</CarouselTitle>
              <Carousel {...settings} >
                <Card photo={restaurante} title="Qualquer coisa" />
                <Card photo={restaurante} title="Qualquer coisa" />
                <Card photo={restaurante} title="Qualquer coisa" />
                <Card photo={restaurante} title="Qualquer coisa" />
              </Carousel>
              <button onClick={()=> setModalOpened(true)}>Abrir Modal</button>
          </Search>
          < RestaurantCard />
      </Container>
      <Map query={query} />
     {/*<Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}/>*/}
    </Wrapper>  
  );
}

export default Home;