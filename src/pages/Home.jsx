import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../redux/getPosts";



export const Home = () => {
  const { data, error, isLoading } = useGetProfileQuery();

  console.log(data);


  if (error) return <h3>Error:</h3>;
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="">

      <nav className=' flex justify-between bg-[#666666]'>
        <h1 className='font-bold text-[32px] text-[#ffffff] mt-[10px] mb-[10px] ml-[20px] pt-[7px] '> DevConnector</h1>
        <div className="flex gap-[30px] font-bold text-[20px] text-[#ffffff] mt-[20px] mb-[20px] mr-[20px]">
          <Link to="/Home">Developers</Link>
          <Link to="/Comment">Posts</Link>
          <Link to="/">Dashboard</Link>
        </div>
      </nav>

      <h1 className='w-[250px] text-[65px] font-bold text-[lightseagreen] ml-[200px] mt-[25px]'>Developers</h1>
      <h3 className='w-[600px]  text-[32px] font-middle ml-[205px] mt-[10px]'>Browse and connect with developers</h3>



      <div>
        {data.map((data) => {
          return (
            <div className="max-w-[1100px] h-[270px] mx-auto border-2  bg-[#dcdcdc] mt-[30px] flex gap-[140px] pt-[15px] pb-[15px]" key={data._id}>

              <div className="ml-[300px] mt-[30px]">
                <h1 className="font-bold text-[black] text-[25px]">{data.bio}</h1>
                <h2 className="font-middle text-[18px] mt-[10px]">Developer: {data.company}</h2>
                <h4 className="font-middle text-[18px] mt-[22px] mb-[15px]">{data.location}</h4>
                <Link to={"/profile"} className="p-[8px] bg-[lightseagreen] text-[#ffffff]">View Profil</Link>
              </div>

              <h5 className="text-[22px] font-bold text-[lightseagreen] mt-[80px]">{data.skills}</h5>
            </div>
          )
        })}


      </div>
    </div>


  );
};
