import React from "react";
import styled from "styled-components";
import ProblemContent from "./ProblemContent";

const ProblemDetailStyled = styled.div`
    width: 600px;
    height: 700px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-style: solid;
    border-image: linear-gradient(to right, #28D0FF, #79C7FF, #B6B1FB, #9456E2,#7401CB);
    border-image-slice: 1;
    border-image-width: 10px;
`;

const ProblemDetailBox = () => {
    return (
        <ProblemDetailStyled>
            <ProblemContent />
        </ProblemDetailStyled>
    );
};

export default ProblemDetailBox;