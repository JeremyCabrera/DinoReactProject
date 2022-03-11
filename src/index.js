//Step 1 Add the React Dependencies on left bar
//Step 2 Import them using command below

import React from "react";
import ReactDOM from "react-dom";

const name = "DinoNerds";
const dino = "Carnotaurus";

//Step 3 call (What you want Ex. <h1>, Where you want it Ex. "root")

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>This is my first React.js project and I love it so far! Here's why:</p>
    <ul>
      <li> Seems much cleaner code</li>
      <li> Way less code to write</li>
      <li> Easier to debug due to less code</li>
    </ul>
    <p>
      My favorite dinosaur is the {dino} becuase they have only discovered ONE
      fossil of it.
    </p>
  </div>,
  document.getElementById("root")
);
