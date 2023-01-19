import { useSelector } from "react-redux";
import styled from "styled-components";
import quest from "./quest.json";

function Matter() {
    const { nowPage } = useSelector((state) => state.nowPageReducer);

    return (
        <MatterStyle>
            {quest[nowPage].number}. {quest[nowPage].quest}
        </MatterStyle>
    );
}

const MatterStyle = styled.div`
    width: 80%;
    text-align: center;
    margin: 0 auto;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2.5rem;
`;

export default Matter;
