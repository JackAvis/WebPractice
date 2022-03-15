

let x = [1, 2, 3];

function Test(){
    let y = 1+2;
    return <h1>{y}</h1>
}

function App(){
    return (
        <div>
            <Test />
            <p> This Paragraph </p>
        </div>
    )
}

export default App;