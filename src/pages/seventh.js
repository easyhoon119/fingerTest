import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle, CommonInputStyle } from "../common/style";

function SeventhPage() {
    const [answer, setAnswer] = useState(0);

    const onIntegerSubmit = (e) => {
        e.preventDefault();
        const num = Number(e.target[0].value);
        let Array = [];
        if (num < 0 || num > 1000) {
            alert("숫자는 0이상 1000이하여야 합니다.");
            return;
        }
        if (num === 0 || num === 1) {
            setAnswer(num);
            return;
        }
        for (let i = 0; i <= Math.sqrt(num); i++) {
            const mod = num % i;
            if (mod === 0) {
                Array.push(i);
                if (i !== num / i) Array.push(num / i);
            }
        }
        let result = Array.reduce(function add(sum, currValue) {
            return sum + currValue;
        });
        console.log(Array);
        setAnswer(result);
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onIntegerSubmit}
                style={{ margin: "0 auto", width: "40%" }}>
                <CommonInputStyle type={"number"} />
            </form>
            <Answer>Answer : {answer}</Answer>
            <Code>
                <pre>
                    {`
                    const num = Number(e.target[0].value);
                    let Array = [];
                    if (num < 0 || num > 1000) {
                        alert("숫자는 0이상 1000이하여야 합니다.");
                        return;
                    }
                    if (num === 0 || num === 1) {
                        setAnswer(num);
                        return;
                    }
                    for (let i = 0; i <= Math.sqrt(num); i++) {
                        const mod = num % i;
                        if (mod === 0) {
                            Array.push(i);
                            if (i !== num / i) Array.push(num / i);
                        }
                    }
                    let result = Array.reduce(function add(sum, currValue) {
                        return sum + currValue;
                    });
                    setAnswer(result);`}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default SeventhPage;
