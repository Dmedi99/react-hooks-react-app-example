import React from "react"; //react and date-fns are both  npm packages
import { format } from "date-fns"; //format is being used in line 10. 
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
//Visible content is returned from the App function below 
function App() {
  return (
    <div className="App">
      <h1>Now</h1> 
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
