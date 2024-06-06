import React ,{useState} from "react";
import { Link } from "react-router-dom";
import './login.css'
import ForgetModal from "./ForgetModal";

const Login = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
          console.log('Toggle modal');
      setIsModalOpen(!isModalOpen);
    };





  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-screen hidden lg:flex  justify-center items-center bg-[#FEF2CA]">
          <img
            src="/4612464 1.png"
            alt="login_background"
            className="w-[80%]"
          />
        </div>
        <div className="container flex flex-col justify-center items-center h-screen">
          <img src="/Logo.png" alt="login_Icon" className="w-32  " />
          <h1 className=" text-xl lg:text-3xl mt-10 font-semibold">Login</h1>
          <form
            className="space-y-4 md:space-y-6  w-9/12 md:w-6/12 mt-12"
            action="#"
          >
               <div className="input-container shadow  rounded-3xl  bg-[#fafafa]">
              {/* <FaUser className='icon' /> */}
              <img src= "/Frame 33.png" className="w-6"/>
              <input type="text" name='email'  placeholder="Email" className="bg-[#fafafa] " />
            </div>

            <div className="input-container shadow  mt-3 rounded-3xl  bg-[#fafafa]">
              {/* <FaUser className='icon' /> */}
              <img src= "/Frame 34.png" className="w-6"/>
              <input type="password" name='password'  placeholder="Password" className="bg-[#fafafa] " />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  
                </div>
                <div className="ml-3 text-sm">
                
                </div>
              </div>
              <button
               onClick={toggleModal}
                className="text-sm font-normal text-login hover:underline "
              >
                Forgot password?
              </button>
            </div>
            <div>
              <Link to="/DashBoard">
                <button
                  type="submit"
                  className="w-full text-white bg-login font-medium rounded-3xl text-sm px-5 py-2.5 text-center  hover:bg-transparent hover:text-login duration-200 border border-login"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>










      {isModalOpen && (
       <ForgetModal toggle={toggleModal}/>
      )}



    </>
  );
};

export default Login;
