import "./App.css";
import EnterBills from "./components/Bills/EnterBills";
import ShowBills from "./components/Bills/ShowBills";
import Layout from "./components/Layout/Layout";
import MenuBar from "./components/MenuBar/MenuBar";
import Navbar from "./components/NavBar/Navbar";
import Tabels from "./components/Tables/Tables";
import MiddleLayout from "./components/Layout/MiddleLayout";
import BillsLayout from "./components/Bills/BillsLayout";

function App() {
  return (
    <>
      <Layout>
        <MenuBar />
        <MiddleLayout>
          <Navbar />

          <EnterBills />
          <ShowBills />

          <Tabels />
        </MiddleLayout>
      </Layout>
    </>
  );
}

export default App;
