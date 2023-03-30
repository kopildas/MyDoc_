import Warpper from "../assests/warppers/testing";
import { NavBar, SearchBar } from "../components";
import doc1 from "../assests/image/doccc1.png";
import doc2 from "../assests/image/docccc2.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Warpper>
      <NavBar />

      <div class=" page">
        <div class="info flex-columnm">
          <div className="info_2 ">
            <h1 className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, nihil tempore? Possimus, laboriosam pariatur
              repudiandae consequatur quidem dicta velit odit omnis molestias
              ipsam debitis sit, amet conse
            </p>
          </div>
          <div className="tw_btn flex gap-4">
            <Link to={"/login"}>
              <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Register
              </button>
            </Link>
          </div>
        </div>
        <img className="main-img" src={doc1} alt="dofx" />
      </div>

      <div className="second_part">
        <div>
          <img className="main-img" src={doc2} alt="dofx" />
        </div>
        <div>
          <h1>hdjahsjd</h1>
          <h1>hdjahsjd</h1>
          
          <SearchBar />
        </div>
        
      </div>
    </Warpper>
  );
};

export default Dashboard;
