//초기 상태값 정의
const initialState = {
    nowPage: 0,
};
//action 설정
export const nowPageAction = (data) => {
    return {
        type: "PAGE",
        data: data,
    };
};

//reducer 설정
const nowPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PAGE": {
            return {
                nowPage: action.data.nowPage,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default nowPageReducer;
