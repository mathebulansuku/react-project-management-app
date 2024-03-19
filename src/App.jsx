import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  let contentDisplay;

  if (projectState.selectedProjectId === null) {
    contentDisplay = <NewProject />;
  } else if (projectState.selectedProjectId === undefined)
    contentDisplay = (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {contentDisplay}
    </main>
  );
}

export default App;
