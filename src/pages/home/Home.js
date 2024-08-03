import React from "react";
import '../home/home.scss'
import { SiRoamresearch } from "react-icons/si";
const Home = () => {
  return (



    //Dummy text on second section 
    <div className="second-section parent">
      <div className="second-sec cont">
        <div className="main-heading">Lorem ipsum dolor sit amet.</div>
        <p className="main-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          dolores temporibus reprehenderit quidem impedit quae eum cupiditate
          illo modi doloremque? Minus molestiae corporis delectus, repellat quis
          porro unde? Nesciunt praesentium quidem reprehenderit hic maxime
          officia doloribus deleniti aliquid obcaecati veritatis.
        </p>
        <div className="card-main">
          <div className="card-box1">
            <div className="card-img">
            <div className="card-text">
              <div className="card-icon"><SiRoamresearch /></div>
              <h4 className="card-title">Lorem, ipsum dolor.</h4>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto, repellendus at dolor voluptatem aliquam soluta facere laudantium ab illum.</p>
            </div>
            </div>
          </div>
          <div className="card-box1">
            <div className="card-img">
            <div className="card-text">
              <div className="card-icon"><SiRoamresearch /></div>
              <h4 className="card-title">Lorem, ipsum dolor.</h4>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto, repellendus at dolor voluptatem aliquam soluta facere laudantium ab illum.</p>
            </div>
            </div>
          </div>
          <div className="card-box1">
            <div className="card-img">
            <div className="card-text">
              <div className="card-icon"><SiRoamresearch /></div>
              <h4 className="card-title">Lorem, ipsum dolor.</h4>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto, repellendus at dolor voluptatem aliquam soluta facere laudantium ab illum.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
