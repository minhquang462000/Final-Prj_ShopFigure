import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},

    },
    reducers: {
        
        setUser: (state, action) => {  
          return {
            ...state,
            user: action.payload
          }
           
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer