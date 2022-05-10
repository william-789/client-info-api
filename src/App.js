import React from 'react'
import styled from 'styled-components'
import clientPicture from './react.jpg'

const MainSectionBox = styled.section `
width: 100vw;
max-width: 650px;
background-color: #fff;
box-sizing: border-box;
box-shadow: 25px 25px 55px #656565;
border-radius: 20px;
@media (max-width: 650px){
    border-radius: none;
  }
a {
    cursor: pointer;
}
`;
const ClientBox = styled.div `
height: 35vh;
background-color: red;
display: flex;
justify-content: center;
align-items: flex-end;
padding: 20px;
box-sizing: border-box;
border-radius: 20px 20px 0 0;
@media (max-width: 650px){
    border-radius: none;
  }
img {
    border-radius: 100%;
    border: solid yellow 5px;
    @media (max-width: 650px){
        width: 50vw;
        max-width: 80px;
        height: 50vw;
        max-height: 80px;
      }
}
`;
const InfoBox = styled.div `
background-color: #fff;
padding: 20px 60px;
border-radius: 0 0 20px 20px;
`;
function App() {
    function getRandomInt() {
        return Math.floor(Math.random() * (26 - 1)) + 1;
      }
    
    fetch("https://randomuser.me/api/")
    .then ((res) => res.json())
    .then(data => console.log(data))

    //returns a Promise that resolves to a JavaScript object

  return (
    <MainSectionBox >
        <ClientBox>
        <img src={clientPicture} alt="Client picture" width="120" height="120"></img>
        </ClientBox>
        <InfoBox>
            <h1>Adress</h1>
            <p>28173 street, city - state</p>
            <p>postcode</p>
            <h1>Contact Info</h1>
            <a href = "mailto: abc@example.com">abc@example.com</a>
            <p>phone: <a href="tel:123-456-7890">123-456-7890</a></p>
            <p>cell: <a href="081-454-0668">081-454-0668</a></p>
            <br></br>
            <p>Been a client for ? years</p>
            <p>Coupons redeemed {getRandomInt()}</p>
        </InfoBox>
        
    </MainSectionBox>
  )
}
/*MISSING: Loading animation
implement async amd await to fetch api*/

export default App;
