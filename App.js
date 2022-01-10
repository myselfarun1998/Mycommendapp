import React from "react";
import SingleCommend from "./singleComponents";
import profile1 from "./img/images.jpg";
import profile2 from "./img/img.png";
import profile3 from "./img/img2.jpg";
// import Home from "./componets/home";
// import Header from "./componets/header";
// import Footer from "./componets/footer";

const App = () => {
  return (
    <div>
       {
        <div>
          <h1 className="title">My commend App</h1>
          <SingleCommend
            name="john deo"
            date="just now"
            commend="very nice"
            img={profile1}
          />
          <SingleCommend
            name="jack"
            date="12 minutes ago"
            commend="awesome"
            img={profile2}
          />
          <SingleCommend
            name="marry rose"
            date="15 mintutes ago"
            commend="quite amazing"
            img={profile3}
          />
        </div>
       

      }
    </div>
  );
};

export default App;
