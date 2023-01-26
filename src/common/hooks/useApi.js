import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    nowAsyncErrorAction,
    nowAsyncLoadingAction,
    nowAsyncSuccessAction,
} from "../../store/useAsyncReducer";

function useApi(callback, deps = [], skip = false) {
    // const state = useSelector((state) => state.nowAsyncReducer);
    // const dispatch = useDispatch();
    const [state, setState] = useState({
        loading: false,
        data: null,
        error: null,
    });

    const fetchData = async () => {
        // dispatch(nowAsyncLoadingAction());
        setState({
            ...state,
            loading: true,
        });
        try {
            const data = await callback();
            // dispatch(nowAsyncSuccessAction(data));
            setState({
                ...state,
                data: data,
            });
        } catch (e) {
            // dispatch(nowAsyncErrorAction(e));
            setState({
                ...state,
                error: e,
            });
        }
    };

    useEffect(() => {
        if (skip) return;
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [state, fetchData];
}

export default useApi;
