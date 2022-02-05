import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(
         rgba(255, 255, 255, 0.5),
         rgba(255, 255, 255, 0.5)
      ),
      url('https://thefashiontag.com/wp-content/uploads/2015/11/men-bags-styles-2016-8.webp')
         center;
   background-size: cover;
`;
const Wrapper = styled.div`
   width: 40%;
   /* display: flex;
   flex-wrap: wrap; */
   background-color: white;
   padding: 20px;
   ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
   font-size: 24px;
   font-weight: 600;
`;
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;
const Input = styled.input`
   padding: 10px;
   margin: 10px 10px 0 0;
   flex: 1;
   min-width: 40%;
`;
const Aggreement = styled.span`
   margin: 10px 0px;
   font-size: 12px;
`;
const Button = styled.button`
   border: none;
   padding: 10px;
   color: white;
   background-color: teal;
   cursor: pointer;
   width: 40%;
`;

const Register = () => {
   return (
      <Container>
         <Wrapper>
            <Title>Create an Account</Title>
            <Form>
               <Input placeholder='First Name' />
               <Input placeholder='Last Name' />
               <Input placeholder='User Name' />
               <Input placeholder='Email' />
               <Input placeholder='Password' />
               <Input placeholder='Confirm Password' />
               <Aggreement>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, minus. <b>Privacy Terms and Agreement</b>
               </Aggreement>
               <Button>Create</Button>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Register;
