import "./App.css";
import Header from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
// import FilterField from "./components/FilterField";
import Footer from "./components/Stats";

function App() {
  return (
    <div className="h-screen w-full grid grid-rows-[auto_auto_1fr_auto]">
      <Header />
      <Form />
      <PackingList />
      {/* <FilterField /> */}
      <Footer />
    </div>
  );
}

export default App;
