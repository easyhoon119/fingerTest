import { useState } from "react";
import styled from "styled-components";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle } from "../common/style";

function FifthPage() {
    const [answer, setAnswer] = useState([]);

    const onCalGcd = (n1, n2) => {
        let ex1 = n1;
        let ex2 = n2;
        let Gcd = 0;
        while (true) {
            if (ex1 < ex2) {
                [ex1, ex2] = [ex2, ex1];
            }
            let ex3 = ex1 % ex2;
            if (ex3 !== 0) {
                ex1 = ex3;
            } else {
                Gcd = ex2;
                break;
            }
        }

        return Gcd;
    };

    const onNumberSubmit = (e) => {
        e.preventDefault();
        let num1 = e.target[0].value;
        let denom1 = e.target[1].value;
        let num2 = e.target[2].value;
        let denom2 = e.target[3].value;
        let num3 = num1 * denom2 + num2 * denom1;
        let denom3 = denom1 * denom2;
        let GcdNum = onCalGcd(num3, denom3);
        setAnswer([num3 / GcdNum, denom3 / GcdNum]);
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onNumberSubmit}
                style={{
                    margin: "0 auto",
                    width: "50%",
                    fontSize: "1.3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
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
            </form>
            <Answer>
                Answer : [{answer[0]},{answer[1]}]
            </Answer>
            <Code>
                <pre>
                    {`
                    const onCalGcd = (n1, n2) => {
                        let ex1 = n1;
                        let ex2 = n2;
                        let Gcd = 0;
                        while (true) {
                            if (ex1 < ex2) {
                                [ex1, ex2] = [ex2, ex1];
                            }
                            let ex3 = ex1 % ex2;
                            if (ex3 !== 0) {
                                ex1 = ex3;
                            } else {
                                Gcd = ex2;
                                break;
                            }
                        }
                
                        return Gcd;
                    };
                        
        let num1 = e.target[0].value;
        let denom1 = e.target[1].value;
        let num2 = e.target[2].value;
        let denom2 = e.target[3].value;
        let num3 = num1 * denom2 + num2 * denom1;
        let denom3 = denom1 * denom2;
        let GcdNum = onCalGcd(num3, denom3);
        setAnswer([num3 / GcdNum, denom3 / GcdNum]);`}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export const InputBoxStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

export const SubmitBtnStyle = styled.button`
    width: 6rem;
    height: 3.5rem;
    border-radius: 1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    cursor: pointer;
`;

export default FifthPage;
