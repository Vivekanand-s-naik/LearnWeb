import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../../appwrite/AuthService";
import { useDispatch } from "react-redux";
import { loggin } from "../../features/authSlice";
import { useNavigate } from "react-router";

function Login() {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        clearErrors,
        handleSubmit
    } = useForm();

    const errorMsg = errors?.email?.message || errors?.password?.message || "";

    
    const emailRegister = register('email', {
        required: "Email is required",
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
    });

    const login = async (data) => {
        try {
            console.log(data)
            await authService.login(data)
            const userData = await authService.getCurrentUser()
            console.log(JSON.parse(JSON.stringify(userData)))
            dispatch(loggin(
                JSON.parse(JSON.stringify(userData))
            ))
            console.log("Loggin Successfull...");
            navigate("/");
            clearErrors();
            setError("");
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit(login)}
                className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5"
            >
                <div className="text-center">
                    <h1 className="min-h-12 text-black font-bold text-5xl">Loggin</h1>
                </div>

                {(error || errorMsg) && (
                    <p className="text-red-500 text-center font-medium">
                        {error || errorMsg}
                    </p>
                )}

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
                                passwordRegister.onChange(e);
                                clearErrors("password");
                                setError("");
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
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login