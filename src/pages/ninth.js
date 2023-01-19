import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle, CommonInputStyle } from "../common/style";

function NinthPage() {
    const [answer, setAnswer] = useState([]);

    const onNineNumberSubmit = (e) => {
        e.preventDefault();
        let n1 = e.target[0].value;
        let Array = [];
        if (n1 < 1 || n1 > 9) {
            alert("1이상 9이하의 자연수만 입력가능합니다.");
            return;
        }
        for (let i = 1; i < 10; i++) {
            Array.push({
                name: `${n1} * ${i}`,
                value: n1 * i,
            });
        }
        setAnswer(Array);
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onNineNumberSubmit}
                style={{ margin: "0 auto", width: "40%" }}>
                <CommonInputStyle type={"number"} />
            </form>
            <Answer>
                {answer.map((item) => (
                    <p key={item.name}>{`${item.name} = ${item.value}`}</p>
                ))}
            </Answer>
            <Code>
                <pre>
                    {`
                        let n1 = e.target[0].value;
                        let Array = [];
                        if (n1 < 1 || n1 > 9) {
                            alert("1이상 9이하의 자연수만 입력가능합니다.");
                            return;
                        }
                        for (let i = 1; i < 10; i++) {
                            Array.push({
                                name: n1 + '*' + i,
                                value: n1 * i,
                            });
                        }
                        setAnswer(Array);`}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default NinthPage;
