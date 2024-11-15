import { Tab, Tabs } from "./components/Tabs";

export const App = () =>{
  return (
    <div className="container">
      <Tabs>
        <Tab label="tab 1">
          <h1>tab1</h1>
        </Tab>
        <Tab label="tab 2">
          <h1>tab2</h1>
        </Tab>
        <Tab label="tab 3">
          <h1>tab3</h1>
        </Tab>
      </Tabs>

      
    </div>
  );
}