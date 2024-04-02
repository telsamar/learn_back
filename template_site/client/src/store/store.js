import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './data/reducers'

export default configureStore({
    reducer: {
        allData: dataReducer
    },
})