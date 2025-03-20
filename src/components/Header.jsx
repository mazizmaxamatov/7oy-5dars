import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (

    <div>
      <header className='w-[1500px] mx-auto '>
        <nav className=' flex justify-between bg-[#666666]'>
          <h1 className='font-bold text-[32px] text-[#ffffff] mt-[10px] mb-[10px] ml-[20px] pt-[7px] '> DevConnector</h1>
          <div className="flex gap-[30px] font-bold text-[20px] text-[#ffffff] mt-[20px] mb-[20px] mr-[20px]">
            <Link to="/Home">Developers</Link>
            <Link to="/Comment">Posts</Link>
            <Link to="/">Dashboard</Link>
          </div>
        </nav>

          <h1 className='w-[250px] text-[65px] font-bold text-[lightseagreen] ml-[200px] mt-[25px]'>Dashboard</h1>
          <h3 className='w-[600px]  text-[32px] font-middle ml-[205px] mt-[10px]'> Welcome muxammadaziz maxamatov</h3>
          <h4 className='w-[300px] rext-[35px] font-bold text-[23px] mt-[50px] ml-[205px]'>Experience Credentials</h4>
          <div className=" w-[200px] ml-[205px] flex gap-[1px] mt-[30px]">
            <p className=' w-[80px] text-[15px] font-bold p-[15px] pl-[5px] bg-[#dcdcdc] '>Company</p>
            <p className=' w-[45px] text-[15px] font-bold p-[15px] pl-[5px] bg-[#dcdcdc] '>Title</p>
            <p className=' w-[50px] text-[15px] font-bold p-[15px] pl-[5px] bg-[#dcdcdc] '>Years</p>
          </div>
          <h4 className='w-[300px] rext-[35px] font-bold text-[23px] mt-[50px] ml-[205px]'>Education Credentials</h4>
          <div className=" w-[200px] ml-[205px] flex gap-[1px] mt-[30px]">
            <p className=' w-[60px] text-[15px] font-bold p-[15px] pl-[5px] bg-[#dcdcdc] '>School</p>
            <p className=' w-[65px] text-[15px] font-bold p-[15px] pl-[5px] bg-[#dcdcdc] '>Degree</p>
            <p className=' w-[50px] text-[15px] font-bold p-[15px] pl-[5px] bg-[#dcdcdc] '>Years</p>
          </div>
          <button className='w-[160px] teext-[20px] font-bold ml-[205px] mt-[20px] pt-[5px] pb-[5px] bg-[red] text-[#ffffff]'> Delete My Account</button>
      </header>
    </div>
  )
}

export default Header
