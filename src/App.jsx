import { Clicker } from "./components/Clicker";
import { Squere } from "./components/Squere";
import { Tab, Tabs } from "./components/Tabs";

export const App = () =>{
  return (
    <div className="container">
      <Tabs>
        <Tab label="Squere">
          <Squere />
        </Tab>
        <Tab label="clicker">
          <Clicker />
        </Tab>
        <Tab label="tab 3">
          <h1>tab3</h1>
        </Tab>
      </Tabs>

      
    </div>
  );
}