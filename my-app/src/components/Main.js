
import basicListIteration from "../images/BasicListIteration.PNG"

let im = <img src = {basicListIteration} height="300px"></img>;

function Main(){

    return(
        <div>
        <h1>My Visualizations</h1>
        <ul>
            <li>
        <a href="http://127.0.0.1:5501/my-app/src/visualizations/IterateList/index.html" target="_blank">-Basic List Iteration</a>
        </li>
        {im}
        </ul>
        </div>
    )
}

export default Main