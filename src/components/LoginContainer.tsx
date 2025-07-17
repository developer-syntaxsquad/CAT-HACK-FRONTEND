import React,{ useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  userID: string;
  password: string;
}

const validationSchema = Yup.object({
  userid: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .required('Password is required'),
});

const LoginContainer : React.FC = () => {

    const [onLoad, setOnLoad] = useState<boolean>(false);
 
     const initialValues: FormValues = {
        userID: '',
        password: '',
    };

    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };

    return(
        <div className="">
            <div className="grid grid-cols-2 px-[2rem] md:px-[4rem]">
                <div className="col-span-2 lg:col-span-1">
                    <img src="/background-image.jpg" alt="background image" className="rounded-t-lg md:rounded-t-none w-full h-full md:rounded-l-lg" />
                </div>
                <div className="col-span-2 lg:col-span-1 bg-white px-[1rem] py-[0.5rem] rounded-b-lg md:rounded-l-none md:rounded-r-lg">
                    <h1 className="text-2xl text-center rajdhani-bold my-[1rem]">Operator Login</h1>
                    <div className="w-full h-full mt-[2rem]">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {
                                ({ isSubmitting }) => (
                                    <Form className="w-full">
                                    <div className="my-[1rem]">
                                        <label className="block mb-2 text-lg font-medium text-gray-900 rajdhani-semibold">User ID</label>
                                        <Field name="userid" type="text" id="userid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 rajdhani-normal focus:outline-none" placeholder="Enter User ID" required />
                                        <ErrorMessage name="userid" component="h1" className="text-red-500 text-sm rajdhani-semibold mt-[0.5rem]" />
                                    </div>

                                    <div className="my-[1rem]">
                                        <label className="block mb-2 text-lg font-medium text-gray-900 rajdhani-semibold">Password</label>
                                        <Field name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 rajdhani-normal focus:outline-none" placeholder="Enter Password" required />
                                        <ErrorMessage name="password" component="h1" className="text-red-500 text-sm rajdhani-semibold mt-[0.5rem]" />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full capitalize bg-[#023047] text-white py-[0.5rem] rounded-lg rajdhani-semibold mt-[2rem]">
                                        {
                                            onLoad?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto animate-spin">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                                :
                                                "Login"

                                        }
                                    </button>
                                </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginContainer;