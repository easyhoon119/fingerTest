import styled from "styled-components";
import TypeIt from "typeit-react";

function Code({ children }) {
    return (
        <CodeStyle>
            <TypeIt options={{ speed: 10 }}>{children}</TypeIt>
        </CodeStyle>
    );
}

const CodeStyle = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: start;
    font-size: 1.2rem;
`;

export default Code;
