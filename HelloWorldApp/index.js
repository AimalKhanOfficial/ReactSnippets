//1st way of doing this:

// ReactDOM.render(
//     <h1>Hello World</h1>,
//     document.getElementById('root')
// );


//2nd way of doing this:
const customComponent = (
    <div>
        <h1>Hello World</h1>
    </div>
);

ReactDOM.render(customComponent, document.getElementById('root'));