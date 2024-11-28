import React, { useState } from 'react'
import Logo from "../assets/Logo-planb.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const[rtoabutton,setrtoabutton]=useState(true)
    console.log(rtoabutton)

  return (
    <div className='flex justify-between  items-center w-11/12 max-w-[1160px] pt-2  mx-auto'>

        <Link to="/dashboard"> 
            {  rtoabutton &&
                <div className='flex justify-center items-center'>
            <img src={Logo} alt="Logo" loading="lazy"  width="90px"/>
            <div className='text-white font-serif translate-x-[-.7rem] text-xl' >PLAN-B</div>
            </div>
            }
        </Link>

        {/* <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
                
            </ul>
        </nav> */}

        {/* middle section */}
         <div className='text-richblack-100 flex gap-x-4' >
            { isLoggedIn &&
                <Link to="/rtoa-section">
                   <button onClick={()=>{setrtoabutton(!rtoabutton)}}>RTOA</button>
                </Link>
            }
            { isLoggedIn &&
                <Link >
                   <button>Appointment</button>
                </Link>
            }
            { isLoggedIn &&
                <Link>
                   <button>Virtual-Consult</button>
                </Link>
            }
            { isLoggedIn &&
                <Link>
                   <button>Insurance</button>
                </Link>
            }
            { isLoggedIn &&
                <Link >
                   <button>Essentials</button>
                </Link>
            }
            { isLoggedIn &&
                <Link>
                   <button>Logistics</button>
                </Link>
            }
            { isLoggedIn &&
                <Link >
                   <button>About</button>
                </Link>
            }
            { isLoggedIn &&
                <Link >
                   <button>Contact</button>
                </Link>
            }
            
         </div>





        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { (!isLoggedIn) &&
                <Link to="/login">
                <button className=' bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700 '>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { (isLoggedIn ) &&
                <Link to="/login">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                        setrtoabutton(true);
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { (isLoggedIn) &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
