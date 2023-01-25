import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import CommonForm from "../common/commonForm";
import { AnswerStyle } from "../common/style";

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
            <CommonForm
                type="totalNumber"
                formWidth={45}
                onSubmit={onNatureNumSubmit}
            />

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
        </AnswerStyle>
    );
}

export default EighthPage;
