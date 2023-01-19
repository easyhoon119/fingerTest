import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle, CommonInputStyle, ErrorMessage } from "../common/style";

function FourthPage() {
    const [error, setError] = useState(" ");

    const onFourthSubmit = (e) => {
        e.preventDefault();
    };

    const onLiteralCheck = (e) => {
        // var literal = /^[조회|이체|대출|상품|자동이체|금리]*$/;
        //"조회" | "이체" | "대출" | "상품" | "자동이체" | "금리",
        const inputValue = e.target.value;
        if (
            inputValue.includes("조회") |
            inputValue.includes("이체") |
            inputValue.includes("대출") |
            inputValue.includes("상품") |
            inputValue.includes("자동이체") |
            inputValue.includes("금리")
        ) {
            setError(
                "조회/이체/대출/상품/자동이체/금리와 같은 단어는 사용이 불가능",
            );
        } else {
            setError(" ");
        }
    };

    return (
        <AnswerStyle>
            <form
                onSubmit={onFourthSubmit}
                style={{
                    margin: "0 auto",
                    width: "40%",
                }}>
                <CommonInputStyle type={"text"} onChange={onLiteralCheck} />
                <ErrorMessage>{error}</ErrorMessage>
            </form>
            <Code>
                <pre>
                    {`const inputValue = e.target.value;
                        if (
                            inputValue.includes("조회") |
                            inputValue.includes("이체") |
                            inputValue.includes("대출") |
                            inputValue.includes("상품") |
                            inputValue.includes("자동이체") |
                            inputValue.includes("금리")
                        ) {
                            setError(
                                "조회/이체/대출/상품/자동이체/금리와 같은 단어는 사용이 불가능합니다.",
                            );
                        } else {
                            setError("");
                        }`}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default FourthPage;
