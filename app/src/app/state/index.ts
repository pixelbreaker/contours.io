import { combineReducers } from "redux"
import { authReducer } from "./auth"

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  auth: authReducer,
})

export { rootReducer }
