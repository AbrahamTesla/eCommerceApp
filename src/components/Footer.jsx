import { Facebook, Instagram, Pinterest, YouTube } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
   padding: 20px;
   display: flex;
`;
const Left = styled.div`
   flex: 1;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background-color: lightblue;
`;
const Center = styled.div`
   flex: 1;
`;
const Right = styled.div`
   flex: 1;
`;
const Title = styled.h1``;
const Description = styled.h3`
   width: 80%;
`;
const SocialIconContainer = styled.div`
   display: flex;
   align-items: center;
`;
const SocialIcons = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
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
               <SocialIcons>
                  <Facebook />
               </SocialIcons>
               <SocialIcons>
                  <Instagram />
               </SocialIcons>
               <SocialIcons>
                  <YouTube />
               </SocialIcons>
               <SocialIcons>
                  <Pinterest />
               </SocialIcons>
            </SocialIconContainer>
         </Left>
         <Center></Center>
         <Right></Right>
      </Container>
   );
};

export default Footer;
