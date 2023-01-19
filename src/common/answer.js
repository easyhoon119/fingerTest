import styled from "styled-components";

function Answer({ children }) {
    return <RealAnswerStyle>{children}</RealAnswerStyle>;
}

const RealAnswerStyle = styled.div`
    width: 70%;
    margin: 0 auto;
    font-size: 1.5rem;
    text-align: center;
`;

export default Answer;
