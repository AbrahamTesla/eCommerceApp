import { Facebook, Instagram, Pinterest, YouTube } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
   /* padding: 20px; */
   display: flex;
`;
const Left = styled.div`
   flex: 1;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   /* background-color: lightblue; */
   padding: 20px;
`;
const Center = styled.div`
   flex: 1;
`;

const List = styled.ul``;
const ListItems = styled.li``;
const Right = styled.div`
   flex: 1;
`;
const Title = styled.h1``;
const Description = styled.p`
   margin: 20px 0px;
`;
const SocialIconContainer = styled.div`
   display: flex;
   /* align-items: center; */
`;
const SocialIcons = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   background-color: #${props => props.color};
`;

const Footer = () => {
   return (
      <Container>
         <Left>
            <Title>Messenger Bag Co.</Title>
            <Description>
               Creating unique and fashionable messenger bag since 1978. We have
               various bags for different occasions. A messenger bag that will
               send love you.
            </Description>
            <SocialIconContainer>
               <SocialIcons color='3B5999'>
                  <Facebook />
               </SocialIcons>
               <SocialIcons color='E4405F'>
                  <Instagram />
               </SocialIcons>
               <SocialIcons color='55ACEE'>
                  <YouTube />
               </SocialIcons>
               <SocialIcons color='E60023'>
                  <Pinterest />
               </SocialIcons>
            </SocialIconContainer>
         </Left>
         <Center>
            <Title>Menu</Title>
            <List>
               <ListItems>Home</ListItems>
               <ListItems>Register</ListItems>
               <ListItems>Login</ListItems>
               <ListItems>Products</ListItems>
            </List>
         </Center>
         <Right></Right>
      </Container>
   );
};

export default Footer;
