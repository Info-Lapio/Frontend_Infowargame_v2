import React from "react";
import Top from "../components/common/Top";
import ProblemArea from "../components/Problem/ProblemArea";

const CtfListPage = () => {
    return (
        <div>
            <Top props="Challenge" />
            <ProblemArea props="Pwnable"/>
            <ProblemArea props="Reversing"/>
        </div>
    );
};

export default CtfListPage;