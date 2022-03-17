import React from 'react'
import "./style.css"
import "./script.js"
import { useRef, useEffect } from 'react'
import Canvas from "./Canvas"



function List(){
    return (
        <div>
        <link rel ="stylesheet" href="style.css"></link>
        <header>
            <h1>List Iteration</h1>
        </header>
        <header>
            <form id = "insert">
                <label for="lname">Insert Value</label><br></br>
                <input type="text" id="insertval" value="11"></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form> 
            <form id = "fillList">
                <label for="tar">Fill List To Value</label><br></br>
                <input type="text" id="fillform" value="10"></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form> 
            <form id = "findtar">
                <label for="tar">Find Target</label><br></br>
                <input type="text" id="findtarget" value="5"></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form> 
            <form id = "settarfps">
                <label for="tarfps">Speed (animation frames per second)</label><br></br>
                <input type="text" id="fpsform" value="25"></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form> 
        </header>
      
        <link rel="stylesheet" href="style.css"></link>
    <body>
    <canvas id = "box"></canvas>
        <footer>@Jackson Davis 2022</footer>
        <script src="script.js">
        </script>
    </body>
    </div>
    )
}


export default List;
