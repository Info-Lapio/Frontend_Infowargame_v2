import React from 'react';
import * as S from './style';
import Logo from './logo.png';

const Deco = () => {
  return (
    <>
      <S.Head>
        <S.Logo><img src={Logo} alt=""/></S.Logo>  
        <div>
          <S.Login>Login</S.Login>
          <S.Sign>Sign up</S.Sign>
        </div>
      </S.Head>
      <S.Line />
    </>
  );
}

export default Deco;