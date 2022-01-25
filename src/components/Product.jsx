import styled from 'styled-components';
import {
   FavoriteBorderOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
} from '@material-ui/icons';

const Info = styled.div`
   //Opacity 0 so that it icons won't appear first. Only appears in hover;
   opacity: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(0, 0, 0, 0.2);
   z-index: 3;
   transition: all 0.5s ease;
   cursor: pointer;
`;

const Container = styled.div`
   flex: 1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f5fbfd;
   position: relative;

   //Hover to each bag then opacity will turn to 1 targeting 'Info'.  Must declare 'Info' first before this 'container'
   &:hover ${Info} {
      opacity: 1;
   }
`;

const Image = styled.img`
   height: 75%;
   z-index: 2;
`;
const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: white;
   position: absolute;
`;

const Icon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   margin: 19px;
   display: flex;
   align-items: center;
   justify-content: center;
   //smooth transition when hover
   transition: all 0.5s ease;

   &:hover {
      background-color: #e9f5f5;
      //expand in hover start with 1 then .1
      transform: scale(1.1);
   }
`;

const Product = ({ item }) => {
   return (
      <Container>
         <Circle />
         <Image src={item.img} />
         <Info>
            <Icon>
               <ShoppingCartOutlined />
            </Icon>
            <Icon>
               <SearchOutlined />
            </Icon>
            <Icon>
               <FavoriteBorderOutlined />
            </Icon>
         </Info>
      </Container>
   );
};

export default Product;
