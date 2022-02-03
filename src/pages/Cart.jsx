import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div`
   padding: 20px;
`;
const Top = styled.div`
   padding: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const Title = styled.h1`
   text-align: center;

   font-weight: 300;
`;

const TopButton = styled.button`
   cursor: pointer;
   padding: 20px;
   font-weight: 600;
   background-color: ${props =>
      props.type === 'filled' ? 'black' : 'transparent'};
   color: ${props => props.type === 'filled' && 'white'};
   border: ${props => props.type === 'filled' && 'none'};
`;
const TopTexts = styled.div`
   display: flex;
`;
const TopText = styled.span`
   margin-right: 10px;
   text-decoration: underline;
   cursor: pointer;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
`;
const Info = styled.div`
   flex: 3;
`;
const Product = styled.div`
   display: flex;
`;
const ProductDetail = styled.div`
   display: flex;
   /* flex-direction: column; */
`;
const Image = styled.img``;
const ProductName = styled.p``;
const ProductSize = styled.p``;
const ProductID = styled.p``;
const PriceDetail = styled.div``;
const Summary = styled.div`
   flex: 1;
`;

const Cart = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
               <TopButton>Continue Shopping</TopButton>
               <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist(0)</TopText>
               </TopTexts>
               <TopButton type='filled'>Checkout now</TopButton>
            </Top>
            <Bottom>
               <Info>
                  <Product>
                     <ProductDetail>
                        <Image src='https://www.pngplay.com/wp-content/uploads/12/Laptop-Bag-Transparent-Background.png' />
                        <ProductName>
                           <b>Messenger Bag:</b>Leather Bag
                        </ProductName>
                        <ProductID>
                           <b>ID:</b>CZ34589YB
                        </ProductID>
                        <ProductSize>
                           <b>Size:</b>width:50cm, height: 20cm
                        </ProductSize>
                     </ProductDetail>
                     <PriceDetail>$ PRICE</PriceDetail>
                  </Product>
               </Info>
               <Summary>Summary</Summary>
            </Bottom>
         </Wrapper>

         <Footer />
      </Container>
   );
};

export default Cart;
