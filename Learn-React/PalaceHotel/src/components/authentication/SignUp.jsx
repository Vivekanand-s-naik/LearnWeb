import { useState } from "react";
import { useForm } from "react-hook-form"
import authService from "../../appwrite/AuthService";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loggin } from "../../features/authSlice";

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors
    } = useForm({ mode: "onBlur" });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")

    const errorMsg =
        errors.name?.message ||
        errors.email?.message ||
        errors.password?.message ||
        "";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRegister = register("email", {
        required: "Enail is required",
        validate: {
            testName: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Enter Valid Email Address",
        },
    });

    const passwordRegister = register("password", {
        required: "Password Is Required",
        validate: {
            testEmail: (value) => {
                if (!value)
                    return "Password is required";
                else if (value.length < 8)
                    return "Password must be at least 8 characters";
                else if (!/[A-Z]/.test(value))
                    return "Must contain at least one uppercase letter";
                else if (!/[a-z]/.test(value))
                    return "Must contain at least one lowercase letter";
                else if (!/[0-9]/.test(value))
                    return "Must contain at least one number";
                else if (!/[^A-Za-z0-9]/.test(value))
                    return "Must contain at least one special character";
                else if (!/^.{8,20}$/.test(value))
                    return "Password must not be Greater than 20 characters";
            },
        },
    })

    const signup = async (Credentials) => {

        try {
            setError("")
            await authService.createAccount(Credentials);
            const userData = await authService.getCurrentUser();
            console.log("userData ; ", JSON.parse(JSON.stringify(userData)));
            dispatch(loggin(
                JSON.parse(JSON.stringify(userData))
            ));
            navigate("/");
        } catch (error) {
            console.log(error.code);
            if (error === "ERR_INTERNET_DISCONNECTED") {
                setError("No Internet Connection");
                return;
            }
            setError(error?.message || error);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit(signup)}
                className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5"
            >
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Create Account</h1>
                    <p className="text-gray-500 mt-2">
                        Sign up to continue
                    </p>
                </div>

                {(error || errorMsg) && (
                    <p className="text-red-500 text-center font-medium">
                        {error || errorMsg}
                    </p>
                )}

                <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="border rounded-lg px-4 py-2 outline-none"
                        {...register("name", {
                            required: "Name is required",
                            validate: {
                                testName: (value) =>
                                    /[a-zA-Z]/.test(value) || "Enter Valid Name",
                            },
                        })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                        type="email"
                        className="border rounded-lg px-4 py-2 outline-none"
                        {...emailRegister}
                        onChange={(e) => {
                            emailRegister.onChange(e)
                            clearErrors("email");
                            setError("");
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Password</label>

                    <div className="flex border rounded-lg overflow-hidden">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="flex-1 px-4 py-2 outline-none"
                            {...passwordRegister}
                            onChange={(e) => {
                                passwordRegister.onChange(e)
                                setError("");
                                clearErrors("password");
                            }}
                        />

                        <button
                            type="button"
                            className="px-4 border-l bg-gray-50 hover:bg-gray-100"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignUp