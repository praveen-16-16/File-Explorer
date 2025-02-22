import { useState } from "react";
import Folder from "./Component/Folder";
import FolderData from "./Module/modul";

function App() {
  const [initialfolder, setinitialfolder] = useState(FolderData);

  
  const updateData = (parent, updatedChild) => {
    if (parent.name === updatedChild.name) {
      return updatedChild;
    }

    if (parent.Children) {
      return {
        ...parent,
        Children: parent.Children.map((child) =>
          updateData(child, updatedChild)
        ),
      };
    }

    return parent;
  };

  const handleUpdate = (updatedData) => {
    setinitialfolder((prevData) => updateData(prevData, updatedData));
  };

  return (
    <div>
      <h1>File Explorer</h1>
      <Folder data={initialfolder} updateData={handleUpdate} />
    </div>
  );
}

export default App;
