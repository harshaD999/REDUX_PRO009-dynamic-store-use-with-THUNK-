import config from '../Utlity/config.json';
import axios from 'axios';

export const getEmployee = () => {

    return dispatch => {
        dispatch({ type: "ETCH_START" });

        axios.get(config.BASE_URL + "getEmployee.php").then((response) => {
            if (response.status == 200) {
                var json = response.data["data"];
                dispatch({ type: "ETCH_SUCCESS", payload: json });
            }
        }).catch((error) => {
            dispatch({ type: "ETCH_ERROR", payload: error.message });
        });
    };
}
export const DeleteEmployee = (eid) => {

    var params = new FormData();
    params.append("eid", eid);

    return dispatch => {
        dispatch({ type: "DELET_EMPLOYEE" });

        axios.post(config.BASE_URL + "deleteEmployeeNormal.php", params).then((responce) => {
            if (responce.status == 200) {
                var json = responce.data;
                if (json["status"] == "true") {
                    dispatch({ type: "EMPLOYEE_DELET", payload: json["message"] });
                    dispatch(getEmployee());
                }
            }
        }).catch((error) => {
            alert(error);
        });
    }
}
export const addEmployee = (params) => {

    return dispatch => {
        dispatch({ type: "ADD_EMPLOYEE" });

        axios.post(config.BASE_URL + "insertEmployeeNormal.php", params).then((responce) => {
            if (responce.status == 200) {
                var json = responce.data;
                if (json["status"] == "true") {
                    dispatch({ type: "EMPLOYEE_ADD", payload: json["message"] });
                    dispatch(getEmployee());
                }
            }
        }).catch((error) => {
            alert(error);
        })
    }
}

export const EditEmployee = (eid) => {
    alert(eid);
};