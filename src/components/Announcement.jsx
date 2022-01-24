import styled from 'styled-components';

const Container = styled.div`
   height: 30px;
   background-color: teal;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 14px;
   font-weight: 500;
`;

const Announcement = () => {
   return <Container>50% Just apply promotional code:WKND</Container>;
};

export default Announcement;
