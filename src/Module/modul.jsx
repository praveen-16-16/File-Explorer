import { Children } from "react";

const FolderData = {
    name :"Root",
    type:"Folder",
    Children:[
        {
            name:"Src",
            type:"Folder",
            Children:[
                {name:"index.js",type:"file"},
                {name:"Project.js",type:"file"}
            ]
        },
        {
            name:"Public",
            type:"folder",
            Children:[
                {name:"app.js",type:"file"},
                {name:"note.js",type:"file"}
            ]
        },
        {
            name:"world.js",
            type:"file"
        }
       
    ]
}
export default FolderData;