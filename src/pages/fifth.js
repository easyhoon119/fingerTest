import { useState } from "react";
import Answer from "../common/answer";
import Code from "../common/code";
import CommonForm from "../common/commonForm";
import { AnswerStyle } from "../common/style";

function FifthPage() {
    const [answer, setAnswer] = useState([]);

    const onCalGcd = (n1, n2) => {
        let ex1 = n1;
        let ex2 = n2;
        let Gcd = 0;
        while (true) {
            if (ex1 < ex2) {
                [ex1, ex2] = [ex2, ex1];
            }
            let ex3 = ex1 % ex2;
            if (ex3 !== 0) {
                ex1 = ex3;
            } else {
                Gcd = ex2;
                break;
            }
        }

        return Gcd;
    };

    const onNumberSubmit = (e) => {
        e.preventDefault();
        let num1 = e.target[0].value;
        let denom1 = e.target[1].value;
        let num2 = e.target[2].value;
        let denom2 = e.target[3].value;
        let num3 = num1 * denom2 + num2 * denom1;
        let denom3 = denom1 * denom2;
        let GcdNum = onCalGcd(num3, denom3);
        setAnswer([num3 / GcdNum, denom3 / GcdNum]);
    };

    return (
        <AnswerStyle>
            <CommonForm
                type="fourNumber"
                onSubmit={onNumberSubmit}
                formWidth={50}
            />
            <Answer>
                Answer : [{answer[0]},{answer[1]}]
            </Answer>
            <Code>
                <pre>
                    {`
                    const onCalGcd = (n1, n2) => {
                        let ex1 = n1;
                        let ex2 = n2;
                        let Gcd = 0;
                        while (true) {
                            if (ex1 < ex2) {
                                [ex1, ex2] = [ex2, ex1];
                            }
                            let ex3 = ex1 % ex2;
                            if (ex3 !== 0) {
                                ex1 = ex3;
                            } else {
                                Gcd = ex2;
                                break;
                            }
                        }
                
                        return Gcd;
                    };
                        
                    let num1 = e.target[0].value;
                    let denom1 = e.target[1].value;
                    let num2 = e.target[2].value;
                    let denom2 = e.target[3].value;
                    let num3 = num1 * denom2 + num2 * denom1;
                    let denom3 = denom1 * denom2;
                    let GcdNum = onCalGcd(num3, denom3);
                    setAnswer([num3 / GcdNum, denom3 / GcdNum]);
                    `}
                </pre>
            </Code>
        </AnswerStyle>
    );
}

export default FifthPage;
