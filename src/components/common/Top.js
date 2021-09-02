import React from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
    margin: 0;
    padding: 10px 0 30px 0;
    height: 100px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-item: center;

    border-style: solid;
    border-image: linear-gradient(to right, #28D0FF, #79C7FF, #B6B1FB, #9456E2,#7401CB);
    border-image-slice: 1;
    border-image-width: 0 0 15px 0;

    position: relative;
`;

const MainTitleStyled = styled.div`
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);

    font-size: 50px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
`;
const LogoutMenuStyled = styled.div`
    display: flex;
`;
const LogoutTitleStyled = styled.div`
    padding: 10px 20px 10px 15px; 

    font-size: 50px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
`;
const LogoStyled = styled.img`
    object-fit: cover;
`;

const Top = ({props}) => {
    return (
        <BannerStyled>
            <LogoStyled src={process.env.PUBLIC_URL + '/images/logo.png'} alt="페이지 로고" />
            <MainTitleStyled>{props}</MainTitleStyled>
            <LogoutMenuStyled>
                <LogoStyled src={process.env.PUBLIC_URL + '/images/Login_logo.png'} alt="페이지 로고" />
                <LogoutTitleStyled>Logout</LogoutTitleStyled>
            </LogoutMenuStyled>
        </BannerStyled> 
    );
};

export default Top;