import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
 import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Notes from "../Notes.js";


function App() {

return (
        <div>
        <Header />
        {Notes.map( eachNote => (<Note key={eachNote.key} title={eachNote.title} content={eachNote.content}/>))}
        <Footer />
        </div>
        
    );
}

export default App;