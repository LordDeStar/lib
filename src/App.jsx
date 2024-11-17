import { Carousel, Slide } from "./components/Carousel/Carousel";
import { Clicker } from "./components/Clicker";
import { Squere } from "./components/Squere";
import { Tab, Tabs } from "./components/Tabs/Tabs";

export const App = () =>{
  return (
    <div className="container">
      <Carousel>
        <Slide index={1}>
          <h1>test1</h1>
          <br />
          <h1>test1</h1>
        </Slide>
        <Slide index={2}>
          <h1>test 2</h1>
        </Slide>
        <Slide index={4}>
          <h1>test 3</h1>
        </Slide>
        <Slide index={3}>
          <h1>test 4</h1>
        </Slide>
      </Carousel>
    </div>
  );
}