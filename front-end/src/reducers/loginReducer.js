import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    passwordVerificationMethod: "",
    showOtp: false,
    isVerificationSucess: null,
    showCreateNewPassword: true,
    isPasswordUpdated: null,
    otp: null,  // Store OTP response
    loading: false,
    error: null
}

// Async Thunk to Fetch OTP
export const fetchOtp = createAsyncThunk(
    "auth/fetchOtp",
    async (phoneNumber, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/api/get-otp");
            return response.data.otp;  // Assuming API returns { otp: "123456" }
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);


// Redux slices
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        select_verification_method: (state, action) => { state.passwordVerificationMethod = action.payload; },
        show_otp_screen: (state, action) => { state.showOtp = action.payload },
        otp_verification_status: (state, action) => { state.isVerificationSucess = action.payload },
        show_create_password: (state, action) => { state.showCreateNewPassword = action.payload },
        show_password_updated: (state, action) => { state.isPasswordUpdated = action.payload; state.showCreateNewPassword = false; },
        reset_state: (state, _action) => {
            state.showOtp = false; state.isVerificationSucess = false;
            state.otp = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.otp = action.payload;
            })
            .addCase(fetchOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { select_verification_method, show_otp_screen, otp_verification_status, show_create_password, show_password_updated, reset_state } = authSlice.actions;

export default authSlice.reducer;

