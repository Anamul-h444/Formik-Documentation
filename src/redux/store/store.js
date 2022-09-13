import{configureStore} from '@reduxjs/toolkit'
import loaderReducer from '../slice-state/loaderSlice'


export default configureStore({
    reducer:{
        progress:loaderReducer,       
    }
})