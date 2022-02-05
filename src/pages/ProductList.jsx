import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;
const Filter = styled.div`
   margin: 20px;
   ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
   font-size: 20px;
   font-weight: 600;
`;
const Title = styled.h1`
   margin: 20px;
`;
const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
   ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const ProductList = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Title>Messenger Bag</Title>
         <FilterContainer>
            <Filter>
               <FilterText>Filter Products:</FilterText>
               <Select>
                  <Option disabled selected>
                     Color
                  </Option>
                  <Option>White</Option>
                  <Option>Black</Option>
                  <Option>Blue</Option>
                  <Option>Gray</Option>
                  <Option>Red</Option>
               </Select>
               <Select>
                  <Option disabled selected>
                     Size
                  </Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
               </Select>
            </Filter>
            <Filter>
               <FilterText>Sort Products:</FilterText>
               <Select>
                  <Option selected>Newest</Option>
                  <Option>Price (asc)</Option>
                  <Option>Price (desc)</Option>
               </Select>
            </Filter>
         </FilterContainer>
         <Products />
         <Newsletter />
         <Footer />
      </Container>
   );
};

export default ProductList;
