
import basicListIteration from "../images/BasicListIteration.gif"
import functionvisual from "../images/Function.gif"

let im = <img src = {basicListIteration} height="300px"></img>;
let imfunction = <img src = {functionvisual} height="300px"></img>;

function Main(){

    return(
        <div>
            <h1>My Visualizations</h1>

            <ul>
                <li>

                    <a target="_blank">


                        <a href= "https://jdavis19unc.github.io/Test/" target="_blank">
                            
                        <h1>Basic List Iteration</h1>
                        {im}
                        </a>
                        <a href= "https://jdavis19unc.github.io/Visuals/sinAnimationPlayable.html" target="_blank">
                            
                        <h1>Function Visualizer</h1>
                        {imfunction}
                        </a>
                        
                    </a>
                </li>

            </ul>
            <footer>@Jackson Davis 2022</footer>
            </div>
    )
}

export default Main