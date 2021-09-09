import React from "react";
import styled from "styled-components";

const ProblemContentStyled = styled.div`
    margin: 50px;
    text-align: center; 
`;
const ProblemTitleStyled = styled.div`
    font-size: 60px;
    position: relative;
`;
const ProblemCloseStyled = styled.button`
    border: 0;
    background-color:transparent;
    font-size: 50px;

    position: absolute;
    top: 20px;
    right: 50px;

    
    &:hover{
        cursor: pointer;
    }
`;
const ProblemExplainStyled = styled.div`
    font-size: 24px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50px);

    text-align: center;
`;
const ProblemFileStyled = styled.div`
    font-size: 30px;
    text-align: center;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 130px;
`;
const ProblemSubmitAreaStyled = styled.div`
    position: absolute;
    right: 60px;
    bottom: 40px;
`;
const ProblemInputStyled = styled.input`
    margin-right: 10px;    

    width: 300px;
    height: 50px;
    font-size: 30px;
    text-align: center;
`;
const ProblemSubmitStyled = styled.button`
    width: 150px;
    height: 60px;
    font-size: 40px;
    
    border: 0;
    background-color:transparent;
    transform: translateY(3px);

    &:hover{
        cursor: pointer;
    }
`;

const ProblemContent = () => {
    return(
        <ProblemContentStyled>
            <ProblemTitleStyled>(Test Title)</ProblemTitleStyled>
            <ProblemCloseStyled><i class="fas fa-times" /></ProblemCloseStyled>
            <ProblemExplainStyled>(Test Content)</ProblemExplainStyled>
            <ProblemFileStyled>(Test File)</ProblemFileStyled>
            <ProblemSubmitAreaStyled>
                <ProblemInputStyled type="text" placeholder="InfoCTF"/>
                <ProblemSubmitStyled>Submit</ProblemSubmitStyled>
            </ProblemSubmitAreaStyled>
        </ProblemContentStyled>
    );
};

export default ProblemContent;