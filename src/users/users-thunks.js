import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, findUserByID, logout, register} from "./users-service";
import login from "./login";
import profile from "../profile";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const findUserByIDThunk = createAsyncThunk(
    'users/findUserByID',
    async (uid) => await findUserByID(uid)
)