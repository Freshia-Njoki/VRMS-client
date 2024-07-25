import { toast } from "sonner";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { authApi } from '../../features/Auth/authApi';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { register, handleSubmit, formState: { errors } } = useForm<IUser>(
    // {
    //   resolver: yupResolver(schema)
    // }
  // );

  // const [createUser, { isLoading }] = authApi.useLoginMutation()

  //   const schema = yup.object().shape({
  //     email: yup.string().required("email is required"),
  //     password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 characters long").required("password is required"),

  // });

  const onSubmit = async () => {
    // try {
    //   const response = await createUser(data).unwrap();
    //   dispatch(setUser(response))
    //   toast.success('login successful')
    //   navigate('/dashboard')
    //   console.log("API response:", response);

    //   if (response && response.msg && Array.isArray(response.msg) && response.msg.length > 0) {
    //     toast.success(`login successful `);
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error)
    //   toast.error('Login failed. Please try again')

    // }


  }

  const handleLogin = () => {
    setTimeout(() => {
      return toast.success("Login Successful")
    }, 2000)
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="email"
              // {...register("email", { required: true })}
            /> {
              // errors.email && toast.error(errors.email?.message)
            } 
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
              // {...register("password", { required: true })}
            />

          </div>
          <div className="flex items-center justify-between">
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin}
            >
              
            <Link to="/dashboard">Log In</Link>
            </button>

            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;