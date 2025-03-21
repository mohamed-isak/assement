import * as yup from "yup";

// Validation schema
const loginSchema = yup.object().shape({
    username: yup.string().required("User Name is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


const ResetPasswordschema = yup.object().shape({
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Confirm Password is required"),
});


export {
    loginSchema,
    ResetPasswordschema
}