import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction:row${({layout})=>layout};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin: 40px 0;
  padding: 60px;
  

  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width:${({theme})=>theme.mobile})  {
      flex-direction:column;
  }
`;
