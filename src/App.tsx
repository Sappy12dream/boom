import Covers from "./Components/Covers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Health from "./Components/Health";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Politic from "./Components/Politic";
import Science from "./Components/Science";
import World from "./Components/World";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center h-full w-full ">
      <Header />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Navbar />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Covers />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Main />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Health />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Politic />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Science />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <World />
      <div className="w-full h-[1px] bg-slate-300"></div>
      <Footer />
    </div>
  );
}

export default App;
