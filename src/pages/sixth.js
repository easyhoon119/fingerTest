import React, { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import CommonForm from "../common/commonForm";
import { AnswerStyle } from "../common/style";

function SixthPage() {
    const [answer, setAnswer] = useState([]);

    const onTotalNumSubmit = (e) => {
        e.preventDefault();
        let num = Number(e.target[0].value);
        let total = Number(e.target[1].value);
        let vNum = Math.floor(total / num);
        let Array = [];
        Array.push(vNum);
        if (num === 1) {
            setAnswer(Array);
            return;
        }
        let cnt = 0;
        let result = 0;
        if (total % num === 0) {
            while (true) {
                Array.push(vNum + (cnt + 1));
                Array.unshift(vNum - (cnt + 1));
                result = Array.reduce(function add(sum, currValue) {
                    return sum + currValue;
                }, 0);
                if (Array.length > num) {
                    alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                    return;
                }
                if (total === result) {
                    if (Array.length !== num) {
                        alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                        return;
                    }
                    break;
                }
                cnt = cnt + 1;
            }
        } else {
            while (true) {
                if (cnt === 0) {
                    Array.push(vNum + 1);
                } else {
                    Array.unshift(Array[0] - 1);
                    Array.push(Array[Array.length - 1] + 1);
                }

                result = Array.reduce(function add(sum, currValue) {
                    return sum + currValue;
                }, 0);
                if (Array.length > num) {
                    alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                    return;
                }
                if (total === result) {
                    if (Array.length !== num) {
                        alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                        return;
                    }
                    break;
                }
                cnt = cnt + 1;
            }
        }
        setAnswer(Array);
    };

    return (
        <AnswerStyle>
            <CommonForm
                type="totalNumber"
                onSubmit={onTotalNumSubmit}
                formWidth={45}
            />
            <Answer>
                Answer : [
                {answer.map((item, index) => (
                    <React.Fragment key={index}>
                        {item}
                        {answer.length - 1 === index ? "" : ","}
                    </React.Fragment>
                ))}
                ]
            </Answer>
            <Code>
                <pre>
                    {`
                    let num = Number(e.target[0].value);
                    let total = Number(e.target[1].value);
                    let vNum = Math.floor(total / num);
                    let Array = [];
                    Array.push(vNum);
                    if (num === 1) {
                        setAnswer(Array);
                        return;
                    }
                    let cnt = 0;
                    let result = 0;
                    if (total % num === 0) {
                        while (true) {
                            Array.push(vNum + (cnt + 1));
                            Array.unshift(vNum - (cnt + 1));
                            result = Array.reduce(function add(sum, currValue) {
                                return sum + currValue;
                            }, 0);
                            if (Array.length > num) {
                                alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                                return;
                            }
                            if (total === result) {
                                if (Array.length !== num) {
                                    alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                                    return;
                                }
                                break;
                            }
                            cnt = cnt + 1;
                        }
                    } else {
                        while (true) {
                            if (cnt === 0) {
                                Array.push(vNum + 1);
                            } else {
                                Array.unshift(Array[0] - 1);
                                Array.push(Array[Array.length - 1] + 1);
                            }
            
                            result = Array.reduce(function add(sum, currValue) {
                                return sum + currValue;
                            }, 0);
                            if (Array.length > num) {
                                alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                                return;
                            }
                            if (total === result) {
                                if (Array.length !== num) {
                                    alert("연속된 n개의 수로 total을 만들 수 없습니다.");
                                    return;
                                }
                                break;
                            }
                            cnt = cnt + 1;
                        }
                    }
                    setAnswer(Array);
                    `}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default SixthPage;
