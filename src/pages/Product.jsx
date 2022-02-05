import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
   display: flex;
   padding: 50px;
   ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
   flex: 1;
   ${mobile({ padding: '0px 10px' })}
`;
const Image = styled.img`
   width: 100%;
   height: 70vh;
   object-fit: cover;
   ${mobile({ heigth: '40vh' })}
`;

const InfoContainer = styled.div`
   flex: 1;
   /* margin-top: 40px; */
   padding: 0px 50px;
   ${mobile({ padding: '10px' })}
`;

const FilterContainer = styled.div`
   display: flex;
   /* align-items: center; */
   justify-content: space-between;
   width: 50%;
   margin: 30px 0px;
   ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
   display: flex;
   align-items: center;
`;
const FilterTitle = styled.span`
   font-weight: 200;
   font-size: 20px;
   margin: 0px 5px;
`;
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   margin: 0px 10px;
   background-color: ${props => props.color};
   cursor: pointer;
`;
const FilterSize = styled.select`
   padding: 10px;
`;
const FilterSizeOption = styled.option`
   padding: 10px;
`;
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;
const Amount = styled.span`
   border-radius: 10px;
   border: 1px solid teal;
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;
const Title = styled.h1`
   font-weight: 200;
`;
const Description = styled.p`
   margin: 20px 0px;
`;
const Price = styled.span`
   font-weight: 200;
   font-size: 50px;
`;
const AddContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 60%;
   ${mobile({ width: '100%' })}
`;
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 400;

   &:hover {
      background-color: #f8f4f4;
   }
`;

const Product = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrapper>
            <ImageContainer>
               <Image src='https://www.pngall.com/wp-content/uploads/5/Men-Accessories-PNG-Download-Image.png' />
            </ImageContainer>
            <InfoContainer>
               <Title>Casual Messenger Bag</Title>
               <Description>
                  Brown Leather with smooth shoulder wrap. Durable zipper to
                  keep your stuff secured. Multiple pockets inside.
               </Description>
               <Price>$40</Price>
               <FilterContainer>
                  <Filter>
                     <FilterTitle>Color:</FilterTitle>
                     <FilterColor color='black' />
                     <FilterColor color='blue' />
                     <FilterColor color='gray' />
                     <FilterColor color='green' />
                  </Filter>
                  <Filter>
                     <FilterTitle>Size</FilterTitle>
                     <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                     </FilterSize>
                  </Filter>
               </FilterContainer>
               <AddContainer>
                  <AmountContainer>
                     <Remove />
                     <Amount>1</Amount>
                     <Add />
                  </AmountContainer>
                  <Button>Add to Cart</Button>
               </AddContainer>
            </InfoContainer>
         </Wrapper>
         <Newsletter />
         <Footer />
      </Container>
   );
};

export default Product;
