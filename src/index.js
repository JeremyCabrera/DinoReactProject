//Step 1 Add the React Dependencies on left bar
//Step 2 Import them using command below

import React from "react";
import ReactDOM from "react-dom";

// Step 3 Add your const

// Tip #1 add a copyright and the below command so the current year will automatically
//        and is not hardcoded into index.js

const currentDate = new Date();
const year = currentDate.getFullYear();

const date = new Date();
const currentTime = date.getHours();

// For greeting that will change based on what time of day it is

let greeting;

const customStyle1 = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle1.color = "blue";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle1.color = "green";
} else {
  greeting = "Good Night";
  customStyle1.color = "orange";
}

const fname = "Dino";
const lname = "Nerds";
const dino = "Carnotaurus";

const customStyle2 = {
  color: "blue",
  fontSize: "20px"
};

//Step 3 call (What you want Ex. <h1>, Where you want it Ex. "root")

//Tip #2 use camelCase for classes

// Render your application

ReactDOM.render(
  <div>
    <h1
      className="heading"
      style={customStyle1}
      contentEditable="true"
      spellCheck="false"
    >
      {greeting} {fname} {lname}!
    </h1>
    <p>
      This is my first React.js project and this will be full of comments and
      examples for me to reference for future projects.{" "}
    </p>
    <ul>
      <li> Seems much cleaner code</li>
      <li> Way less code to write</li>
      <li> Easier to debug due to less code</li>
    </ul>
    <p>
      So anyways, my favorite dinosaur is the {dino} because they have only
      discovered ONE fossil of it. Below is how you add images in JSX.
    </p>

    <img
      class="dino-img"
      src="https://cdn.pixabay.com/photo/2017/09/28/09/26/dinosaur-2794840_1280.png"
      alt="velociraptor silouette"
    />
    <img
      class="dino-img"
      src="https://cdn.pixabay.com/photo/2018/04/13/20/49/silhouette-3317569_1280.png"
      alt="trex silouette"
    />
    <img
      class="dino-img"
      src="https://cdn.pixabay.com/photo/2018/04/13/20/49/silhouette-3317571_1280.png"
      alt="triceratops silouette"
    />

    <h2 style={customStyle2}>
      {" "}
      This is example of "Inline Styling" Carnotaurus
    </h2>

    <p> Copyright DinoDevOps {year}</p>
  </div>,

  document.getElementById("root")
);
