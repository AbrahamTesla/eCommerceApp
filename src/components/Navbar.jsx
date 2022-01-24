import { Search } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
   height: 60px;
   background-color: lightblue;
`;
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   ${'' /* align-center: center; */}
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;
const Center = styled.div`
   flex: 1;
   text-align: center;
`;
const Right = styled.div`
   flex: 1;
`;
const Language = styled.span`
   cursor: pointer;
   font-size: 14px;
`;

const SearchContainer = styled.div`
   border: 0.5px solid lightgrey;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`;
const Input = styled.input`
   border: none;
`;

const Logo = styled.h1`
   font-weight: bold;
   ${'' /* text-align: center; */}
`;

const Navbar = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Language>EN</Language>
               <SearchContainer>
                  <Input></Input>
                  <Search />
               </SearchContainer>
            </Left>
            <Center>
               <Logo>Ace</Logo>
            </Center>
            <Right>Right</Right>
         </Wrapper>
      </Container>
   );
};

export default Navbar;
