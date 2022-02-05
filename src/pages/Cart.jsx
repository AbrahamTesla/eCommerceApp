import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
   padding: 20px;
   ${mobile({ padding: '10px' })}
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
   ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
   margin-right: 10px;
   text-decoration: underline;
   cursor: pointer;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
   flex: 3;
`;
const Product = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
   flex: 2;
   display: flex;
   /* flex-direction: column; */
`;
const Details = styled.div`
   flex-direction: column;
   padding: 20px;
   display: flex;
   justify-content: space-around;
`;
const Image = styled.img`
   width: 200px;
`;
const ProductName = styled.span``;
const ProductSize = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
`;
const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
   ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 300;
   ${mobile({ marginBottom: '20px' })}
`;
const Hr = styled.hr`
   background-color: #eee;
   border: none;
   height: 1px;
`;
const Summary = styled.div`
   flex: 1;
   border-radius: 10px;
   border: 1px solid lightgrey;
   padding: 20px;
   height: 50vh;
`;
const SummaryTitle = styled.h1`
   font-weight: 300;
`;
const SummaryItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 20px 0px;
   font-weight: ${props => props.type === 'total' && '500'};
   font-size: ${props => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
   width: 100%;
   background-color: black;
   color: white;
   font-weight: 600;
   padding: 10px;
   font-size: 24px;
   cursor: pointer;
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
                        <Details>
                           <ProductName>
                              <b>Messenger Bag: </b>Leather Bag
                           </ProductName>
                           <ProductID>
                              <b>ID: </b>CZ34589YB
                           </ProductID>
                           <ProductColor color='brown' />
                           <ProductSize>
                              <b>Size: </b>width: 50cm, height: 20cm
                           </ProductSize>
                        </Details>
                     </ProductDetail>
                     <PriceDetail>
                        <ProductAmountContainer>
                           <Add />
                           <ProductAmount>2</ProductAmount>
                           <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$20</ProductPrice>
                     </PriceDetail>
                  </Product>
                  <Hr />
                  <Product>
                     <ProductDetail>
                        <Image src='https://www.pngall.com/wp-content/uploads/5/Men-Accessories-PNG-Download-Image.png' />
                        <Details>
                           <ProductName>
                              <b>Messenger Bag: </b>Leather Bag
                           </ProductName>
                           <ProductID>
                              <b>ID: </b>CZ34589YB
                           </ProductID>
                           <ProductColor color='brown' />
                           <ProductSize>
                              <b>Size: </b>width: 50cm, height: 20cm
                           </ProductSize>
                        </Details>
                     </ProductDetail>
                     <PriceDetail>
                        <ProductAmountContainer>
                           <Add />
                           <ProductAmount>3</ProductAmount>
                           <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                     </PriceDetail>
                  </Product>
               </Info>
               <Summary>
                  <SummaryTitle>Your Order</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$10</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>$-7.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type='total'>
                     <SummaryItemText>Total</SummaryItemText>
                     <SummaryItemPrice>$30</SummaryItemPrice>
                  </SummaryItem>
                  <Button>Check Out Now</Button>
               </Summary>
            </Bottom>
         </Wrapper>

         <Footer />
      </Container>
   );
};

export default Cart;
