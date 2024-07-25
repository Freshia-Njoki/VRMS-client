import { Link } from 'react-router-dom';
import { toast } from "sonner";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    // try {
    //   // Assuming `createUser` is a function from your API slice
    //   // const response = await createUser(data).unwrap();
    //   // dispatch(setUser(response))
    //   // toast.success('Login successful');
    //   // navigate('/dashboard');
    //   console.log("API response:", data); // Placeholder for API response

    //   if (data) {
    //     toast.success('Login successful');
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   toast.error('Login failed. Please try again');
    // }
  };

  const handleLogin = () => {
    setTimeout(() => {
      toast.success("Login Successful");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {/* {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>} */}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {/* {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>} */}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              <Link
              to="/admin-dashboard"
             
            >
              Log In
            </Link>
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
