import styled from 'styled-components';
import { hotProducts } from '../data';
import Product from './Product';

const Container = styled.div`
   display: flex;
`;

const Products = () => {
   return (
      <Container>
         {hotProducts.map(item => (
            <Product item={item} />
         ))}
      </Container>
   );
};

export default Products;
