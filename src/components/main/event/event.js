import React from 'react';
import * as S from './style';
import Flag from './event1.png';



function Event(){
    return(
        <>
          <S.Div>
              <S.Logo>
                <img src={Flag} alt="" />
                <S.Event>Event</S.Event>
              </S.Logo>
          </S.Div>
          <S.ImageDiv>
            <S.Images />
          </S.ImageDiv> 
        </>
    )
}


export default Event;