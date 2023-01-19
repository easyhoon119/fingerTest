import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle } from "../common/style";
import { InputBoxStyle, SubmitBtnStyle } from "./fifth";

function EighthPage() {
    const [answer, setAnswer] = useState([]);

    const onNatureNumSubmit = (e) => {
        e.preventDefault();
        let num1 = Number(e.target[0].value);
        let num2 = Number(e.target[1].value);
        let Array = [];
        if (num1 < 1 || num2 < 1) {
            alert("자연수만 입력이 가능합니다.");
        }
        Array.push({ name: "합", value: num1 + num2 });
        Array.push({ name: "차", value: num1 - num2 });
        Array.push({ name: "곱", value: num1 * num2 });
        Array.push({ name: "나머지", value: num1 % num2 });
        setAnswer(Array);
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onNatureNumSubmit}
                style={{
                    margin: "0 auto",
                    width: "45%",
                    fontSize: "1.3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                <InputBoxStyle>
                    <label>num1 : </label>
                    <input type={"number"} required />
                    <label>num2 : </label>
                    <input type={"number"} required />
                </InputBoxStyle>
                <SubmitBtnStyle type={"submit"}>계산</SubmitBtnStyle>
                <Answer>
                    {answer.map((item, index) => (
                        <p key={item.name}>
                            {item.name} : {item.value}
                        </p>
                    ))}
                </Answer>
                <Code>
                    <pre>
                        {`
                            let num1 = Number(e.target[0].value);
                            let num2 = Number(e.target[1].value);
                            let Array = [];
                            if (num1 < 1 || num2 < 1) {
                                alert("자연수만 입력이 가능합니다.");
                            }
                            Array.push({ name: "합", value: num1 + num2 });
                            Array.push({ name: "차", value: num1 - num2 });
                            Array.push({ name: "곱", value: num1 * num2 });
                            Array.push({ name: "나머지", value: num1 % num2 });
                            setAnswer(Array);`}
                    </pre>
                </Code>
            </form>
        </AnswerStyle>
    );
}

export default EighthPage;
