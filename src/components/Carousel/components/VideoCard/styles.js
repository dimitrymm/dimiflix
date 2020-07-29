import styled from 'styled-components';

export const VideoCardContainer = styled.a`
    border:2px solid;
    border-radius:4px;
    text-decoration:none;
    overflow:hidden;
    cursor:pointer;
    color:white;
    flex:0 0 298px;
    width:298px;
    height:197px;
    background-image:${({ url }) => `url(${url})`};
    background-size:cover;
    background-position: center;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  z-index:200;


  transition: all .2s ease-in-out; 
  &:hover{    
    box-shadow: 10px 10px 5px black;  
    transform: scale(1.1);       
  }
  
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

`;

