import styled from 'styled-components';

export const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.4rem;
border-color:${props =>(props.cart ? "var(--mainYellow)":"var(--mainBlue)")};
color:${props =>(props.cart ? "var(--mainYellow)": "var(--mainBlue)")};
padding:0.2rem 0.5rem;
border-radius:0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0rem;
transition:all 0.5s ease-in-out;
&: hover {
  background:${props =>(props.cart ? "var(--mainYellow)" : "var(--mainBlue)")};
  color:var(--mainBlue);
}
&: focus{
  outline:none;
}

`