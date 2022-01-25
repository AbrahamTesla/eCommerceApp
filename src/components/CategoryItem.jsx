import styled from 'styled-components';

const Container = styled.div`
   //To give equal size for 3 images flex 1 with margin of 3px;
   flex: 1;
   position: relative;
   margin: 3px;
   /* background-color: red; */
   height: 70vh;
`;
const InfoContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   /* background-color: yellow; */
`;
const Image = styled.img`
   //Occupy the whole space
   width: 100%;
   height: 100%;
   object-fit: cover;
   /* margin: 3px; */
`;

const Title = styled.h1`
   color: white;
   margin-bottom: 20px;
`;
const Button = styled.button`
   border: none;
   background-color: white;
   color: gray;
   cursor: pointer;
   font-weight: 600;
   font-size: 20px; ;
`;

const CategoryItem = ({ item }) => {
   return (
      <Container>
         <Image src={item.img} />
         <InfoContainer>
            <Title>{item.title}</Title>
            <Button>BUY NOW</Button>
         </InfoContainer>
      </Container>
   );
};

export default CategoryItem;
