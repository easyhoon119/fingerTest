import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle, CommonInputStyle } from "../common/style";

function TenthPage() {
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState([]);

    const onEngCheck = (e) => {
        var eng = /^[a-zA-Z]*$/;
        if (!eng.test(e.target.value)) {
            alert("영어만 입력가능 합니다.");
        } else {
            setValue(e.target.value);
        }
    };

    const onStringSubmit = (e) => {
        e.preventDefault();
        let Array = [];
        let num1 = Math.floor(value.length / 10);
        let num2 = 0;
        if (value.length <= 10) {
            Array.push(value);
        } else {
            for (let i = 0; i < num1; i++) {
                num2 = (i + 1) * 10;
                Array.push(value.slice(i * 10, num2));
            }
            if (num2 !== value.length) {
                Array.push(value.slice(num2, value.length));
            }
        }

        setAnswer(Array);
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onStringSubmit}
                style={{ margin: "0 auto", width: "40%" }}>
                <CommonInputStyle
                    value={value}
                    onChange={onEngCheck}
                    type={"text"}
                />
            </form>
            <Answer>
                {answer.map((item, index) => (
                    <p key={item + index}>{item}</p>
                ))}
            </Answer>
            <Code>
                <pre>
                    {`
                        let Array = [];
                        let num1 = Math.floor(value.length / 10);
                        let num2 = 0;
                        if (value.length <= 10) {
                            Array.push(value);
                        } else {
                            for (let i = 0; i < num1; i++) {
                                num2 = (i + 1) * 10;
                                Array.push(value.slice(i * 10, num2));
                            }
                            if (num2 !== value.length) {
                                Array.push(value.slice(num2, value.length));
                            }
                        }
                
                        setAnswer(Array);`}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default TenthPage;
