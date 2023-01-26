//초기 상태값 정의
const initialState = {
    loading: true,
    data: null,
    error: false,
};
//action 설정
export const nowAsyncLoadingAction = () => {
    return {
        type: "LOADING",
        data: null,
    };
};

export const nowAsyncSuccessAction = (data) => {
    return {
        type: "SUCCESS",
        data: data,
    };
};

export const nowAsyncErrorAction = (error) => {
    return {
        type: "ERROR",
        error: error,
    };
};

//reducer 설정
const nowAsyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING": {
            return {
                loading: true,
                data: null,
                error: null,
            };
        }
        case "SUCCESS": {
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        }
        case "ERROR": {
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default nowAsyncReducer;
