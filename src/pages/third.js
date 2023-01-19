import Answer from "../common/answer";
import Code from "../common/code";
import { AnswerStyle } from "../common/style";

function ThirdPage() {
    const date = new Date();
    const dummy = [
        {
            name: "상품A",
            startDate: "2023.01.01",
            endDate: "2023.01.31",
        },
        {
            name: "상품B",
            startDate: "2023.01.01",
            endDate: "2023.06.15",
        },
        {
            name: "상품C",
            startDate: "2021.02.11",
            endDate: "2023.12.31",
        },
        {
            name: "상품D",
            startDate: "2023.04.01",
            endDate: "2023.06.18",
        },
        {
            name: "상품E",
            startDate: "2022.04.01",
            endDate: "2023.01.28",
        },
        {
            name: "상품F",
            startDate: "2022.07.17",
            endDate: "2023.09.19",
        },
    ];

    return (
        <AnswerStyle>
            <Answer>
                {dummy
                    .filter(
                        (value) =>
                            new Date(value.startDate) <= date &&
                            new Date(value.endDate) >= date,
                    )
                    .map((item) => (
                        <p
                            key={
                                item.name
                            }>{`${item.name}/${item.startDate}~${item.endDate}`}</p>
                    ))}
            </Answer>
            <Code>
                {`dummy.filter((value) => new Date(value.startDate) <= date && new Date(value.endDate) >= date)`}
            </Code>
        </AnswerStyle>
    );
}

export default ThirdPage;
