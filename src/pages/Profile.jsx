import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../redux/getPosts";

export const Profile = () => {
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




      <div>
        {data.map((data) => {
          return (
            <div className="w-[600px] mx-auto border-4 mt-[30px] text-center pt-[15px] pb-[15px]" key={data._id}>

           
                <h1 className="text-[20px] font-bold mt-[10px]">Bio: {data.bio}</h1>
                <h2 className="text-[20px] font-bold mt-[10px]">Companny: {data.company}</h2>
                <h2 className="text-[20px] font-bold mt-[10px]">Date: {data.date}</h2>
                <h3 className="text-[20px] font-bold mt-[10px]">Githubusername: {data.githubusername}</h3>
                <h4 className="text-[20px] font-bold mt-[10px]">location: {data.location}</h4>
                <h5 className="text-[20px] font-bold mt-[10px]">Skills: {data.skills}</h5>
                <h6 className="text-[20px] font-bold mt-[10px]">Status: {data.status}</h6>
                <h6 className="text-[20px] font-bold mt-[10px]">Website: {data.website}</h6>
                <p className="text-[20px] font-bold mb-[15px] mt-[10px]">Id: {data._id}</p>
              <Link to={"/home"} className="p-[8px] bg-[lightseagreen] text-[#ffffff]">Developers</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};


