import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
   height: 60vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background-color: #fcf5f5;
`;
const InputContainer = styled.div`
   /* display: flex;
   align-items: center;
   justify-content: center; */
   width: 50%;
   height: 40px;
   background-color: lightblue;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgray;
   ${mobile({ width: '80%' })}
`;
const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 20px;
`;
const Description = styled.div`
   font-weight: 300;
   font-size: 30px;
   margin-bottom: 20px;
   ${mobile({ textAlign: 'center' })}
`;
const Input = styled.input`
   flex: 8;
   border: none;
   padding-left: 20px;
`;
const Button = styled.button`
   flex: 1;
   border: none;

   &:hover {
      background-color: teal;
      cursor: pointer;
   }
`;

const Newsletter = () => {
   return (
      <Container>
         <Title>Newsletter</Title>
         <Description>
            Please subscribe to get up to date messenger bags.
         </Description>
         <InputContainer>
            <Input placeholder='Please type your Email' />
            <Button>
               <Send />
            </Button>
         </InputContainer>
      </Container>
   );
};

export default Newsletter;
