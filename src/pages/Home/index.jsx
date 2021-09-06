import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

import { 
  Container, 
  Search, 
  Logo, 
  Wrapper, 
  Map,
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
      <Map/>
      <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}/>
    </Wrapper>  
  );
}

export default Home;