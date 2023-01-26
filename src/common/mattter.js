import { useSelector } from "react-redux";
import styled from "styled-components";
import useApi from "./hooks/useApi";
import { getMatter } from "./modules/getApi";
import { postMatter } from "./modules/postApi";

function Matter() {
    const { nowPage } = useSelector((state) => state.nowPageReducer);
    const [state, fetchData] = useApi(
        () => getMatter(nowPage),
        [nowPage],
        false,
    );
    const [states, fetchDatas] = useApi(
        () => postMatter(nowPage + 1, 1000),
        [],
        true,
    );
    const { loading: matterLoading, data: matter } = state;

    const onChangeNumber = () => {
        fetchDatas();
        fetchData();
    };

    return (
        <MatterStyle>
            {!matterLoading && matter
                ? `${matter.number}. ${matter.quest}`
                : "...로딩중..."}
        </MatterStyle>
    );
}

const MatterStyle = styled.div`
    width: 80%;
    text-align: center;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2.5rem;
`;

export default Matter;
