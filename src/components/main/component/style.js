import styled from 'styled-components';

export const Head = styled.div`
  width: 100%;
  
  align-items: center;
  justify-content: space-between;
  & div{
    align-items: center;
  }
`
export const Logo = styled.div`
  width: 121px;
  height: 121px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const Login = styled.h1`
  width: 100px;
  height: 50px;
  background-color: white;
  margin-right: 20px;
  font-size: 35px;
`;

export const Sign = styled(Login)`
  width: 150px;
  border: 2px solid black;
  left: 350px;
  text-align: center;
  border-radius: 15px;
`;

export const Line = styled.div`
  width: 100%;
  height: 20px;
  background: linear-gradient(to right, #28D0FF, #79C7FF, #B6B1FB, #9456E2,#7401CB)
`