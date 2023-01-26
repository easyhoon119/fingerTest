import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { nowPageAction } from "../store/nowPageRedux";
import RouteBtn from "./routeBtn";
import i18n from "../utils/i18n";

function Header() {
    const { nowPage } = useSelector((state) => state.nowPageReducer);
    const dispatch = useDispatch();
    const location = useLocation();
    const { t } = useTranslation();
    const local = localStorage.getItem("react-i18n");

    useEffect(() => {
        dispatch(
            nowPageAction({
                nowPage: Number(location.pathname.split("/")[1]),
            }),
        );
        if (!local) {
            localStorage.setItem("react-i18n", "ko");
        }
    }, [location.pathname, dispatch]);

    const onChangeLocale = () => {
        if (local === "ko") {
            i18n.changeLanguage("en");
            localStorage.setItem("react-i18n", "en");
        } else if (local === "en") {
            i18n.changeLanguage("jp");
            localStorage.setItem("react-i18n", "jp");
        } else {
            i18n.changeLanguage("ko");
            localStorage.setItem("react-i18n", "ko");
        }
    };
    return (
        <HeaderStyle>
            {nowPage !== 0 ? <RouteBtn name="이전 문제" /> : <div></div>}
            {/* <button onClick={onChangeLocale}>{t("언어변환")}</button>
            <p>{t("로그인")}</p> */}
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
