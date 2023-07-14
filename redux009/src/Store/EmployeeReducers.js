const initialState = {
    loading: false,
    data: [],
    error: "",
    deleteMessage:""
};

const EmployeeReducers = (state = initialState, action) => {

    switch (action.type) {
        case "ETCH_START":
            return {
                ...state,
                loading: true
            };
        case "ETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case "ETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
/**********************DELET EMPLOYEE******************************** */
            case "DELET_EMPLOYEE":
                return {
                    ...state,
                    loading: true
                };
            case "EMPLOYEE_DELET":
                return {
                    ...state,
                    loading: false,
                    deleteMessage: action.payload
                };
        default:
            return state;

    }

}
export default EmployeeReducers;