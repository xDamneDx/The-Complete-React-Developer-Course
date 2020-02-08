const appRoot = document.getElementById('app');

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                visibility && (
                    <p>Hey. These is some details you can now see!</p>
                )
            }
        </div>
    )

    ReactDOM.render(template, appRoot);
}

render();
