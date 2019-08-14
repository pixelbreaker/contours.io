import {
  ActionType,
  getType,
  createStandardAction as cSA,
} from "typesafe-actions"
import { createSelector } from "reselect"

// Types
export type AuthState = {
  error: string | null
  lastLogin: string | null
  loggedIn: LoggedIn
  token: string | null
}

export enum LoggedIn {
  Yes = "Yes",
  No = "No",
  Maybe = "Maybe",
}

// Actions
export const actions = {
  init: cSA("auth/INIT")(),
  login: cSA("auth/LOGIN")<{ username: string; password: string }>(),
  loginCallback: cSA("auth/LOGIN_CALLBACK")(),
  loginCallbackError: cSA("auth/LOGIN_CALLBACK_ERROR")<{
    error: string
  }>(),
  loginCallbackSuccess: cSA("auth/LOGIN_CALLBACK_SUCCESS")<{
    token: string
    lastLogin: string
  }>(),
  logout: cSA("auth/LOGOUT")(),
  noSession: cSA("auth/NO_SESSION")(),
}

// Selectors

// Reducers
const initialState: AuthState = {
  error: null,
  lastLogin: null,
  loggedIn: LoggedIn.Maybe,
  token: null,
}

export const authReducer = (
  state: AuthState = initialState,
  action: ActionType<typeof actions>
): AuthState => {
  switch (action.type) {
    case getType(actions.init):
      return { ...state }

    default:
      return state
  }
}
