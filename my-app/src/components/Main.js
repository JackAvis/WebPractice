
import basicListIteration from "../images/BasicListIteration.gif"

let im = <img src = {basicListIteration} height="300px"></img>;

function Main(){

    return(
        <div>
        <h1>My Visualizations</h1>
        <ul>
            <li>
        <a href="http://127.0.0.1:5501/my-app/src/visualizations/IterateList/index.html" target="_blank">
        <h1>Basic List Iteration</h1>
        {im}
        </a>
        </li>
        
        </ul>
        <footer>@Jackson Davis 2022</footer>
        </div>
    )
}

export default Main