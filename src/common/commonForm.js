import styled from "styled-components";
import { CommonInputStyle, ErrorMessage } from "./style";

function CommonForm({ formWidth, onSubmit, onChange, value, error, type }) {
    return (
        <CommonFormStyle onSubmit={onSubmit} formWidth={formWidth} type={type}>
            {(type === "text") | (type === "oneNumber") ? (
                <CommonInputStyle
                    value={value}
                    type={type === "text" ? "text" : "number"}
                    onChange={onChange}
                    required
                />
            ) : (
                ""
            )}
            {type === "fourNumber" ? (
                <>
                    <InputBoxStyle>
                        <label>number 1 : </label>
                        <input type={"number"} required />
                        <label>denom 1 : </label>
                        <input type={"number"} required />
                    </InputBoxStyle>
                    <InputBoxStyle>
                        <label>number 2 : </label>
                        <input type={"number"} required />
                        <label>denom 2 : </label>
                        <input type={"number"} required />
                    </InputBoxStyle>
                    <SubmitBtnStyle type={"submit"}>계산</SubmitBtnStyle>
                </>
            ) : (
                ""
            )}
            {type === "totalNumber" ? (
                <>
                    <InputBoxStyle>
                        <label>num1 : </label>
                        <input type={"number"} required />
                        <label>num2 : </label>
                        <input type={"number"} required />
                    </InputBoxStyle>
                    <SubmitBtnStyle type={"submit"}>계산</SubmitBtnStyle>
                </>
            ) : (
                ""
            )}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </CommonFormStyle>
    );
}

const CommonFormStyle = styled.form`
    width: ${(props) => props.formWidth}%;
    margin: 0 auto;
    ${(props) =>
        (props.type !== "text") | (props.type !== "oneNumber")
            ? "font-size : 1.3rem; display : flex; flex-direction : column; justify-content : center;"
            : ""}
`;

const InputBoxStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

const SubmitBtnStyle = styled.button`
    width: 6rem;
    height: 3.5rem;
    border-radius: 1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    cursor: pointer;
`;

export default CommonForm;
