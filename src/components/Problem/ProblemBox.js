import React from "react";
import styled from "styled-components";

const ProblemBoxStyled = styled.div`
    margin: 10px;

    height: 120px;
    width: 250px;

    position: relative;

    background-color: black;
    color: white;
`;

const ProblemTextStyled = styled.div`
    position: absolute;
    left: 32%;

    font-size: 50px;
`;
const ProblemScoreStyled = styled.div`
    position: absolute;
    left: 45%;
    transform: translateY(80px);   

    font-size: 20px;
`;

const ProblemBox = ({title, score}) => {
    return (
        <ProblemBoxStyled>
            <ProblemTextStyled>{title}</ProblemTextStyled>
            <ProblemScoreStyled>{score}</ProblemScoreStyled>
        </ProblemBoxStyled>
    );
};

export default ProblemBox;