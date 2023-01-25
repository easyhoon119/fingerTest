import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { nowPageAction } from "../store/nowPageRedux";
import RouteBtn from "./routeBtn";

function Header() {
    const { nowPage } = useSelector((state) => state.nowPageReducer);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(
            nowPageAction({
                nowPage: Number(location.pathname.split("/")[1]),
            }),
        );
    }, [location.pathname, dispatch]);

    return (
        <HeaderStyle>
            {nowPage !== 0 ? <RouteBtn name="이전 문제" /> : <div></div>}
            {nowPage !== 9 ? <RouteBtn name="다음 문제" /> : <div></div>}
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    padding: 0 2rem;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 0 0.5rem 0.5rem -0.5rem gray;
    background-color: lightyellow;
`;

export default Header;
