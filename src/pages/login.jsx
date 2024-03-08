import React from "react";
import { request } from "../config/confog";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [login, setLogin] = React.useState(true);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (Cookies.get("server-token")) {
  //     navigate("/home", { replace: true });
  //   }
  // }, [1]);
  const submit = (data) => {
    if (login) {
      request
        .post("/login", data)
        .then((res) => {
          Cookies.set("server-token", res.data.accessToken);
          // <Navigate to="/home" replace />;
          navigate("/home", { replace: true });
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }

    request
      .post("/register", data)
      .then((res) => {
        Cookies.set("server-token", res.data.accessToken);
        // <Navigate to="/home" replace />;
        navigate("/home", { replace: true });

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };

  return (
    <div className="fixed bg-[#0000054b] inset-0 flex items-center justify-center ">
      <div className="p-5 rounded-md  bg-slate-500 shadow-lg hover:shadow-black/25 hover:p-[21px]">
        <button
          className="mb-2"
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? "Register" : "Login"}
        </button>
        {login ? (
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col items-center"
          >
            <div>
              <input
                className="mb-3 border border-black p-2 rounded-md "
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <input
                className="mb-3 border border-black p-2 rounded-md"
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
              />
            </div>
            <button className="py-1 px-3 bg-blue-500 text-white rounded-md ">
              Login
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col items-center"
          >
            <div>
              <input
                className="mb-3 border border-black p-2 rounded-md "
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <input
                className="mb-3 border border-black p-2 rounded-md "
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
              />
            </div>
            <div>
              <input
                className="mb-3 border border-black p-2 rounded-md"
                {...register("Surname", { required: true })}
                type="text"
                placeholder="Surname"
              />
            </div>
            <div>
              <input
                className="mb-3 border border-black p-2 rounded-[16px]"
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
              />
            </div>
            <button className="py-1 px-3 bg-blue-500 text-white rounded-md ">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
