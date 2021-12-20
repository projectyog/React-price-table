import styled from 'styled-components';
import Pricing from './component/Pricing';

function App() {
  return (
    <MainContainer>
    <div className="pricing-component">
      <Pricing 
        headerText="Free"
        currency="$"
        duration="mon"
        price={0}
        buttonContent="Get Started"
        data = {[{value:true,text:"Single User"},
        {value:true,text:"5 GB Storage"},
        {value:true,text:"5 Unlimited Public Projects"},
        {value:true,text:"5 GB Community Access"},
        {value:false,text:"Unlimited Private Projects"},
        {value:false,text:"Free Subdomain"}
        ]}/>
        </div>
        <div className="pricing-component">
        <Pricing 
        headerText="Plus"
        currency="$"
        duration="mon"
        price={9}
        buttonContent="Get Started"
        data = {[{value:true,text:"5 User"},
        {value:true,text:"50 GB Storage"},
        {value:true,text:"Unlimited Public Projects"},
        {value:true,text:" Community Access"},
        {value:true,text:"Unlimited Private Projects"},
        {value:false,text:"Monthly Status"}
        ]}/>
        </div>
        <div className="pricing-component">
        <Pricing 
        headerText="Pro"
        currency="$"
        duration="mon"
        price={49}
        buttonContent="Get Started"
        data = {[
        {value:true,text:"Unlimited User"},
        {value:true,text:"150 GB Storage"},
        {value:true,text:"Unlimited Public Projects"},
        {value:true,text:"Community Access"},
        {value:false,text:"Unlimited Private Projects"},
        {value:false,text:"Monthly Status Report"}
        ]}/>
        </div>
    </MainContainer>
    
  );
}

const MainContainer = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
background-color:blue;

@media screen and (max-width: 970px){
  height:100%;
  flex-direction:column;
  .pricing-component{
    margin:2rem 0;
  }
}
`;

export default App;
