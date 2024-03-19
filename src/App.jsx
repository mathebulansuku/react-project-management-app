import Sidebar from "./components/SideBar";

function App() {
  return (
    <MutationObserver>
      <Sidebar />
    </MutationObserver>
  );
}

export default App;
