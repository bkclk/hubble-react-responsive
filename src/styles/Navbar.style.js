import styled from "styled-components";


export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;
`;
export const Nav=styled.nav`
    margin-bottom:40px ;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;

    @media (max-width:${({theme})=>theme.mobile})  {
      flex-direction:column;
  }

    
`;

export const NavIcon=styled.img`
   @media (max-width:${({theme})=>theme.mobile})  {
      margin-bottom:30px ;
   }
   
`
export const Image=styled.img`
   width:375px ;
  margin-left:40px ;
  @media (max-width:${({theme})=>theme.mobile})  {
      margin:40px 0 10px;
  }
   
`