import {
   Facebook,
   Instagram,
   MailOutline,
   Phone,
   Pinterest,
   Room,
   YouTube,
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
   /* padding: 20px; */
   display: flex;
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   /* align-items: center;
   justify-content: center; */
   /* background-color: lightblue; */
   padding: 20px;
`;

const Logo = styled.h3``;
const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;
const List = styled.ul`
   //Removing margin and padding.  'ul' has its own by default margin and padding
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;
const ListItems = styled.li`
   //To see flex-wrap, need to set a width size.
   width: 50%;
   margin-bottom: 10px;
`;
const Right = styled.div`
   flex: 1;
   padding: 20px;
`;
const ContactItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
`;
const Payment = styled.img`
   width: 60%;
   background-color: white;
   object-fit: cover;
`;
const Description = styled.p`
   margin: 20px 0px;
`;
const SocialIconContainer = styled.div`
   display: flex;
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
            <Logo>Messenger Bag Co.</Logo>
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
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{ marginRight: '10px' }} /> 123 Fisherville Drive
            </ContactItem>
            <ContactItem>
               <Phone style={{ marginRight: '10px' }} /> +1 777-777-7777
            </ContactItem>
            <ContactItem>
               <MailOutline style={{ marginRight: '10px' }} />
               manlangitv@gmail.com
            </ContactItem>
            <Payment src='https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png' />
         </Right>
      </Container>
   );
};

export default Footer;
