import React from 'react';
import styled from 'styled-components';
import Main from '../components/main/event/event'
import Notice from '../components/main/notice/notice'
import Top from '../components/common/Top';



function MainBoardPage(){
    return(
        
            <div>
            <Top props="MainPage"></Top>
            <div style={{display: "flex"}}>
                <Main />
                <Notice />
                </div>
            </div>
        
    )
}


export default MainBoardPage;