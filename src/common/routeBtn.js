import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { nowPageAction } from "../store/nowPageRedux";

function RouteBtn({ name }) {
    const { nowPage } = useSelector((state) => state.nowPageReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickRouteBtn = () => {
        if (name === "이전 문제") {
            navigate(`/${nowPage - 1 === 0 ? "" : nowPage - 1}`);
            // dispatch(
            //     nowPageAction({
            //         nowPage: nowPage - 1,
            //     }),
            // );
        } else {
            navigate(`/${nowPage + 1}`);
            // dispatch(
            //     nowPageAction({
            //         nowPage: nowPage + 1,
            //     }),
            // );
        }
    };

    return <RouteBtnStyle onClick={onClickRouteBtn}>{name}</RouteBtnStyle>;
}

const RouteBtnStyle = styled.div`
    width: 15%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    color: whitesmoke;
    font-weight: 500;
    font-size: 1.5rem;
    background-color: green;
    cursor: pointer;
`;

export default RouteBtn;
