const initialState = {
    loading: false,
    data: [],
    error: "",
    sinlgedata:null,
    deleteMessage:"",
    isactioncompleted:false,
    operation:"insert"
};

const ProductReducers = (state = initialState, action) => {
/************************GET PRODUCT******************** */
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                loading: true
            };
        case "API_START":
                return {
                    ...state,
                    loading: true
                };
        case "API_END":
                return {
                    ...state,
                    loading: false
                };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                isactioncompleted:false,
            };
        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };


/************************DELET PRODUCT******************** */
        case "DELET_PRODUCT":
            return {
                ...state,
                loading: true
            };
        case "FETCH_DELET":
            return {
                ...state,
                loading: false,
                deleteMessage: action.payload
            };


/************************GET SINGLE PRODUCT******************** */
        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                operation:"edit",
                sinlgedata:action.payload,
            };
        case "UPDATE_PRODUCT":
                return {
                    ...state,
                    operation:"insert",
                    isactioncompleted:true
                };
     
        default:
            return state;
    }
}

export default ProductReducers;