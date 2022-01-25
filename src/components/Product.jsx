import styled from 'styled-components';

const Container = styled.div``;
const Circle = styled.div``;
const Image = styled.img``;
const Icon = styled.div``;

const Product = ({ item }) => {
   return (
      <Container>
         <Circle></Circle>
         <Image src={item.img} />
         <Icon></Icon>
      </Container>
   );
};

export default Product;
