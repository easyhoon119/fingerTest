import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import CommonForm from "../common/commonForm";
import { AnswerStyle } from "../common/style";

function FirstPage() {
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState("");

    const onEngCheck = (e) => {
        var eng = /^[a-zA-Z]*$/;
        if (!eng.test(e.target.value)) {
            alert("영어만 입력가능 합니다.");
        } else {
            setValue(e.target.value);
        }
    };

    const onSubmitTestCase = (e) => {
        e.preventDefault();
        setAnswer(value.toUpperCase().split("").sort());
    };

    return (
        <AnswerStyle>
            <CommonForm
                type={"text"}
                formWidth={40}
                onSubmit={onSubmitTestCase}
                onChange={onEngCheck}
                value={value}
            />

            <Answer>Answer : {answer}</Answer>
            <Code>value.toUpperCase().split("").sort()</Code>
        </AnswerStyle>
    );
}

export default FirstPage;
