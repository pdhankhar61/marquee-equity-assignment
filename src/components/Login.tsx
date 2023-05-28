import { loginFormType } from "../types/types";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";

const loginFormSchema = Yup.object().shape({
  email: Yup.string().trim().email().required("Please enter your email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Please enter your password"),
});

const initialValues: loginFormType = { email: "", password: "" };

function Login() {
  const navigate = useNavigate();
  const { setUserAuth } = useAuthHook();
  return (
    <div className="container mx-auto sm:max-w-max pt-16 px-4 sm:px-0 sm:pt-20">
      <h1 className="text-hxs sm:text-hsm text-gray-900 font-semibold px-4 text-center">
        Log in to your account
      </h1>
      <p className="text-tmd text-gray-600 text-center mt-3 sm:px-6">
        Welcome back! Please enter your details.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setUserAuth({ email: values.email });
          navigate("/dashboard", { replace: true });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mt-8">
              <label htmlFor="email">
                <span className="block mb-2 text-tmd font-medium text-gray-700">
                  Email
                </span>
              </label>
              <Field
                name="email"
                disabled={isSubmitting}
                type="email"
                placeholder="Enter your email"
                className="placeholder:text-gray-400  w-full px-3.5 py-2.5 border border-gray-300 shadow-sm rounded-lg text-tmd text-gray-500 outline-none focus:border-primary-300 focus:ring focus:ring-primary-100"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-600 text-tsm w-[360px]"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password">
                <span className="block mb-2 text-tmd font-medium text-gray-700">
                  Password
                </span>
              </label>
              <Field
                name="password"
                disabled={isSubmitting}
                type="password"
                placeholder="********"
                className="placeholder:text-gray-400  w-full px-3.5 py-2.5 border border-gray-300 shadow-sm rounded-lg text-md text-gray-500 outline-none focus:border-primary-300 focus:ring focus:ring-primary-100"
              />
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-600 text-tsm w-[360px]"
              />
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className={`mt-5 text-tmd flex justify-center ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-primary-600 hover:bg-primary-800 ease-in-out duration-300 hover:shadow-lg cursor-pointer"
              } text-white font-semibold outline-none py-3 w-full rounded-lg`}
            >
              {!isSubmitting ? (
                "Sign in"
              ) : (
                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
