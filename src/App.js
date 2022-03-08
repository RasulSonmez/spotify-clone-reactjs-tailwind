import Sidebar from "./components/Sidebar";
import Bottombar from "./components/BottomBar";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </>
  );
}

export default App;
