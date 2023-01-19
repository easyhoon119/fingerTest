import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle, CommonInputStyle } from "../common/style";

function SecondPage() {
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState("");

    const onEmailNumberCheck = (e) => {
        var engNum = /^[a-zA-Z0-9]*$/;
        if (!engNum.test(e.target.value)) {
            alert("영어와 숫자만 입력가능 합니다.");
        } else {
            setValue(e.target.value);
        }
    };

    const onSubmitTestCase = (e) => {
        e.preventDefault();
        let num = /^[0-9]/;

        setAnswer(
            value.split("").sort((a, b) => {
                if (num.test(a)) {
                    a = String.fromCharCode(a.charCodeAt(0) + 1000);
                }
                if (num.test(b)) {
                    b = String.fromCharCode(b.charCodeAt(0) + 1000);
                }
                return a.toUpperCase() < b.toUpperCase() ? -1 : 1;
            }),
        );
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onSubmitTestCase}
                style={{ margin: "0 auto", width: "40%" }}>
                <CommonInputStyle
                    type={"text"}
                    onChange={onEmailNumberCheck}
                    value={value}
                />
            </form>

            <Answer>Answer : {answer}</Answer>
            <Code>
                <pre>
                    {`value.split("").sort((a, b) => {
                    if (num.test(a)) { 
                        a = String.fromCharCode(a.charCodeAt(0) + 1000); 
                    } 
                    if (num.test(b)) { 
                        b = String.fromCharCode(b.charCodeAt(0) + 1000); 
                    } 
                    return a.toUpperCase() < b.toUpperCase() ? -1 : 1;
                })`}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default SecondPage;
