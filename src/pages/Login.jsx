import React from 'react';
import styled from 'styled-components';

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
      url('https://media.gq.com/photos/5c86815eac478e6b2971a38d/master/w_1280,c_limit/GettyImages-1097444240.jpg')
         center;
   background-size: cover;
`;
const Wrapper = styled.div`
   width: 25%;
   background-color: white;
   padding: 20px;
`;
const Title = styled.h1`
   font-size: 24px;
   font-weight: 600;
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
`;
const Input = styled.input`
   padding: 10px;
   margin: 10px 0;
   flex: 1;
   min-width: 40%;
`;
const Link = styled.a`
   margin: 10px 0px;
   text-decoration: underline;
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

const Login = () => {
   return (
      <Container>
         <Wrapper>
            <Title>Sign-In</Title>
            <Form>
               <Input placeholder='User Name' />

               <Input placeholder='Password' />

               <Button>Login</Button>
               <Link>Forgot Password</Link>
               <Link>Create a new account</Link>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Login;
