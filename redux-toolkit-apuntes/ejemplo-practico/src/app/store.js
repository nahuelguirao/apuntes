import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

//Configuramos el store y le pasamos los reducers que va a tener nuestra app
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: icecreamReducer,
        user: userReducer
    },
})


export default store