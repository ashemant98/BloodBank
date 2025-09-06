import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API.JS";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/signin",
  async ({ role, username, password }, { rejectWithValue }) => {
    try {
      const result = await API.post("/user/signin", {
        role,
        username,
        password,
      });

      const data = result.data;

      if (data.success) {
        console.log("Login successfull");
        localStorage.setItem("token ", data.token);
        toast.success("Login success");
        return data;
      } else {
        toast.error(data.message || "Invalid credentials");
        return rejectWithValue(data.message || "Invalid credentials");
      }
    } catch (err) {
      if (err.response && err.response.data.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const userSignin = createAsyncThunk(
  "auth/signup",
  async ({ role, username, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/user/signup", {
        role,
        username,
        password,
      });

      if (data.success) {
        console.log("signup successful");
        toast.success(data.message || "Signup successfull");
        return data;
      } else {
        toast.error(data.message || "Signup failed");
        return rejectWithValue(data.message);
      }
    } catch (e) {}
  }
);
