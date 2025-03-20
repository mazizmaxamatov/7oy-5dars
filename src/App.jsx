import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import { Comment } from "./pages/Comment";
import { Home } from "./pages/Home";
import { Profile } from "../src/pages/Profile";


const App = () => {




  return (
    <div>

    
      <Routes>
        
         
        <Route path="*" element={<Header/>}/>
        <Route path="/comment" element={<Comment/>} />
        <Route path="/home" element={<Home/>} />
       <Route path="/Profile" element={<Profile/>}/>
       
        <Route path="*" element={<NotFoundPage />} />


      </Routes>


    </div>
  );
};

export default App;
  
































/* 
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import CardDetails from "./components/CardDetails";


<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-details:/id" element={<CardDetails/>}/>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>


      <div className="w-[500px] mx-auto">
        <button className="border" onClick={() => dispatch(increment())}>
          Qoshish
        </button>
        <br />
        <span>{count}</span>

        <br />
        <button className="border" onClick={() => dispatch(decrement())}>
          Ayirish
        </button >

        <button className="border" onClick={() => dispatch(incrementByAmount(10))}>
         10 ta qoshish
        </button >
      

      </div>
      */








/*
 
  <div>
<div className="w-[500px] mx-auto">
  <button className="border" onClick={() => dispatch(increment())}>
    Qoshish
  </button>
  <span>{count}</span>
  <button className="border" onClick={() => dispatch(decrement())}>
    Ayirish
  </button >

  <button className="border" onClick={() => dispatch(incrementByAmount(10))}>
   10 ta qoshish
  </button >
 

</div>
</div>



<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/card-details:/id" element={<CardDetails/>}/>

  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />

  <Route path="*" element={<NotFoundPage />} />
  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />
</Routes>
*/