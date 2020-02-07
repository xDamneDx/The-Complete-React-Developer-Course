console.log('App.js is running');

// JSX - JavaScript XML

const appRoot = document.getElementById('app');

const app = {
    title: "Indecision App",
    subtitle: "Put Your Life in The Hands of The Computer",
    options: ["One", "Two"]
}
const template = (
    <div>
        <h1>{ app.title }</h1>
        { app.subtitle && <p>{app.subtitle}</p> }
        <p>{ app.options.length > 0 ? 'Here are your options:' : 'No options' }</p>
        <ol>
            <li>Item One</li>
            <li>Item Tow</li>
        </ol>
    </div>
);

ReactDOM.render(template, appRoot);
