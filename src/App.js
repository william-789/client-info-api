import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LoadingBox = styled.div `
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const MainSectionBox = styled.section `
width: 100vw;
max-width: 650px;
background-color: #fff;
box-sizing: border-box;
box-shadow: 25px 25px 55px #656565;
border-radius: 20px;
@media (max-width: 650px){
    border-radius: 0;
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
    border-radius: 0;
  }
img {
    border-radius: 100%;
    border: solid yellow 5px;
    @media (max-width: 450px){
        width: 50vw;
        max-width: 100px;
        height: 50vw;
        max-height: 100px;
      }
}
`;
const InfoBox = styled.div `
background-color: #fff;
padding: 20px 60px;
border-radius: 0 0 20px 20px;
@media (max-width: 650px){
  border-radius: 0;
}
`;
function App() {
    function getRandomInt() {
      return Math.floor(Math.random() * (26 - 1)) + 1;
    }

    const [client, setClient] = useState([])
    const [loading, setLoading] = useState(true);

    const FetchApi = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/");
        //returns a Promise that resolves to a JavaScript object
        console.log(res.ok);
        //show errors that didn't trigger catch() 
        const data = await res.json();
        //uses await cause json() also returns a Promise
        setClient(data);
        console.log(client);
        setLoading(false);
      } catch (err) {
        console.log('ERROR');
        console.error(err);        
      }};

      useEffect(() => {
        FetchApi()
      }, [])
  if(loading){
    return(
      <LoadingBox>Loading...</LoadingBox>
    )
  } else {
  return (
    <MainSectionBox >
        <ClientBox>
        <img src={client.results[0].picture.large} alt="Client picture" width="120" height="120"></img>
        </ClientBox>
        <InfoBox>
            <h1>{client.results[0].name.title}. {client.results[0].name.first} {client.results[0].name.last}</h1>
            <h1>Adress</h1>
            <p>{client.results[0].location.street.number} {client.results[0].location.street.name}, {client.results[0].location.city} - {client.results[0].location.state}</p>
            <p>{client.results[0].postcode}</p>
            <h1>Contact Info</h1>
            <a href = "mailto: {client.results[0].email}">{client.results[0].email}</a>
            <p>phone: <a href={client.results[0].phone}>{client.results[0].phone}</a></p>
            <p>cell: <a href={client.results[0].cell}>{client.results[0].cell}</a></p>
            <br></br>
            <p>Been a client for {client.results[0].registered.age} years</p>
            <p>Coupons redeemed {getRandomInt()}</p>
        </InfoBox>
        
    </MainSectionBox>
  )}
}
/*MISSING: Loading animation*/

export default App;
