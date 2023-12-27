const initState = {
    crop:[],
    loading:false,
    error:false
}

 const reducer = (state = initState, { type, payload })=>{
    switch (type) {
        case 'CROP_DATA_REQ':{
            return{

                ...state,
                loading:true,
            }
        }
        case 'CROP_DATA_SUCCESS':{
            return{
                ...state,
                crop:[...payload],
                error : false,
                loading :false
            }
        }
        case 'CROP_DATA_FAILED':{
            return{
                ...state,
                crop:[],
                error : true,
                loading :false
            }
        }
        default:
            return state;
    }
}


export default reducer;