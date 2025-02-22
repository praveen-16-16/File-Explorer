import { useState } from "react";

function Folder({ data, updateData }) {
    const [getvalue, setvalue] = useState("");
    const [isopen, setisopen] = useState(false);
    const [showinput, setShowinput] = useState({
        visible: false,
        type: null
    });

    if (data.type === "file") {
        return <div>📄 {data.name}</div>;
    }

    function createfolder(e, isFolder) {
        e.stopPropagation();
        setisopen(true);
        setShowinput({
            visible: true,
            type: isFolder
        });
    }

    const addfolder = (e) => {
        if (e.key === "Enter" && getvalue.trim()) {
            const newitem = {
                name: getvalue,
                type: showinput.type ? "folder" : "file",
                Children: showinput.type ? [] : null
            };

            const updatedFolder = {
                ...data,
                Children: [...(data.Children || []), newitem]
            };

            updateData(updatedFolder);
            setvalue("");
            setShowinput({ visible: false, type: null });
        }
    };

    return (
        <div className="container">
            <div className="container_folder" onClick={() => setisopen(!isopen)}>
                {isopen ? "📂" : "📁"} {data.name}
                <button onClick={(e) => createfolder(e, true)}>Folder</button>
                <button onClick={(e) => createfolder(e, false)}>File</button>
            </div>

            {showinput.visible && (
                <div>
                    <span className="input">{showinput.type ? "📂" : "📄"}</span>
                    <input
                        type="text"
                        onKeyDown={addfolder}
                        onBlur={() => setShowinput({ ...showinput, visible: false })}
                        onChange={(e) => setvalue(e.target.value)}
                        value={getvalue}
                        autoFocus
                    />
                </div>
            )}

            {isopen && (
                <div className="container_folder_child">
                    {data.Children?.map((child, index) => (
                        <Folder key={index} data={child} updateData={updateData} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Folder;
