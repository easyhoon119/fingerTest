import { useState } from "react";
import Code from "../common/code";
import CommonForm from "../common/commonForm";
import { AnswerStyle } from "../common/style";

function FourthPage() {
    const [error, setError] = useState(" ");

    const onFourthSubmit = (e) => {
        e.preventDefault();
    };

    const onLiteralCheck = (e) => {
        const inputValue = e.target.value;
        const wordArray = ["조회", "이체", "대출", "상품", "자동이체", "금리"];
        if (wordArray.some((el) => inputValue.includes(el))) {
            setError(
                "조회/이체/대출/상품/자동이체/금리와 같은 단어는 사용이 불가능",
            );
        } else {
            setError(" ");
        }
    };

    return (
        <AnswerStyle>
            <CommonForm
                type="text"
                formWidth={40}
                onSubmit={onFourthSubmit}
                onChange={onLiteralCheck}
                error={error}
            />
            <Code>
                <pre>
                    {`
                        const inputValue = e.target.value;
                        const wordArray = ["조회", "이체", "대출", "상품", "자동이체", "금리"];
                        if (wordArray.some((el) => inputValue.includes(el))) {
                            setError(
                                "조회/이체/대출/상품/자동이체/금리와 같은 단어는 사용이 불가능",
                            );
                        }
                        else {
                            setError("");
                        }
                        `}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default FourthPage;
