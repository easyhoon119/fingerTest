import styled from "styled-components";
import TypeIt from "typeit-react";

function Code({ children }) {
    return (
        <CodeStyle>
            <TypeIt options={{ speed: 5, cursor: false }}>{children}</TypeIt>
        </CodeStyle>
    );
}

const CodeStyle = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: start;
    font-size: 1.2rem;
    line-height: 1.5rem;
`;

export default Code;
