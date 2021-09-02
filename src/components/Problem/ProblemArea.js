import React from "react";
import styled from "styled-components";
import ProblemBox from "./ProblemBox";

const ProblemfieldStyled = styled.div`
    margin: 40px 270px 0 270px;
`;
const ProblemTitleStyled = styled.div`
    display: block;
    font-size: 60px;
`;
const ProblemBoxAreaStyeld = styled.div`
    display: flex;
    flex-flow: wrap;
`;

const ProblemArea = ({props}) => {
    return (
        <ProblemfieldStyled>
            <ProblemTitleStyled>{props}</ProblemTitleStyled>
            <ProblemBoxAreaStyeld>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
                <ProblemBox title="test" score="20"/>
            </ProblemBoxAreaStyeld>
        </ProblemfieldStyled>
    );
};

export default ProblemArea;