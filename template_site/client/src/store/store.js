import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './data/reducers'
import { interfaceReducer } from './interface/reducers'

export default configureStore({
    reducer: {
        allData: dataReducer,
        allInterface: interfaceReducer
    },
})