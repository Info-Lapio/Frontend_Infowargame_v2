import React from "react";
import { Link } from "react-router-dom";
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
    padding: 13px 20px 7px 15px; 

    font-size: 50px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
`;
const LogoStyled = styled.img`
    width: 100px;
    height: auto;
`;

const Top = ({props}) => {
    return (
        <BannerStyled>
            <Link to="/" style={{width: "1000px;"}}>
                <LogoStyled style={{margin: "5px 0 0 5px"}}src={process.env.PUBLIC_URL + '/images/logo.png'} alt="페이지 로고" />
            </Link>
            <MainTitleStyled>{props}</MainTitleStyled>
            <Link to="" style={{textDecoration: "none", color: "black"}}>
                <LogoutMenuStyled>
                    <LogoStyled src={process.env.PUBLIC_URL + '/images/Login_logo.png'} alt="페이지 로고" />
                    <LogoutTitleStyled>Logout</LogoutTitleStyled>
                </LogoutMenuStyled>
            </Link>
        </BannerStyled> 
    );
};

export default Top;