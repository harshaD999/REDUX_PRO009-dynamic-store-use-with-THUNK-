import axios from 'axios';
import config from '../Utlity/config.json';


export const getProducts = () => {
    
    return dispatch => {
        dispatch({type:"FETCH_START"});

        axios.get(config.BASE_URL + "getProducts.php").then((response)=>{
            if(response.status==200)
            {  
                var json = response.data["data"];
                dispatch({type:"FETCH_SUCCESS",payload:json});
            }
        }).catch((error)=>{
            dispatch({type:"FETCH_ERROR",payload:error.message});
        });


    };

       
}
export const DeleteProducts = (pid) => {

    var params = new FormData();
    params.append("pid",pid);

return dispatch=>{

    dispatch({type:"DELET_PRODUCT"});

    axios.post(config.BASE_URL + "deleteProductNormal.php",params).then((response)=>{
       
        if(response.status==200)
        {
            var json = response.data;
            if(json["status"]=="true")
            {
                dispatch({type:"FETCH_DELET",payload:json["message"]});
                dispatch(getProducts());
            }
            
        }
    }).catch((error)=>{
        alert(error);
    });
}

}
export const addProduct = (params) => {

return dispatch=>{    
    dispatch({type:"ADD_PRODUCT"});
        axios.post(config.BASE_URL + "insertProductNormal.php",params).then((responce)=>{
            if(responce.status==200)
            {
                var json = responce.data;
                if(json["status"]=="true")
                {
                    dispatch({type:"FETCH_ADD",payload:json["message"]});
                    dispatch(getProducts());
                }
            }
        }).catch((error)=>{
            alert(error);
        })
    }
};
export const editProduct = (pid) => {
    var params = new FormData();
    params.append("pid",pid);
   
    return dispatch=>{ 
            dispatch({type:"API_START"});  
            axios.post(config.BASE_URL + "getSingleProduct.php",params).then((responce)=>{
                dispatch({type:"API_END"});
                if(responce.status==200)
                {
                    var json = responce.data;
                    if(json["status"]=="true")
                    {
                        dispatch({type:"GET_SINGLE_PRODUCT",payload:json["data"]});
                    }
                }
            }).catch((error)=>{
                dispatch({type:"API_END"}); 
                alert(error); 
            })
        }
};

export const updateProduct = (params) => {
    return dispatch=>{ 
        dispatch({type:"API_START"});  
        axios.post(config.BASE_URL + "updateProductNormal.php",params).then((responce)=>{
            dispatch({type:"API_END"});
            if(responce.status==200)
            {
                var json = responce.data;
                if(json["status"]=="true")
                {
                    dispatch({type:"UPDATE_PRODUCT"});
                    dispatch(getProducts());
                }
            }
        }).catch((error)=>{
            dispatch({type:"API_END"}); 
            alert(error); 
        })
    }
}