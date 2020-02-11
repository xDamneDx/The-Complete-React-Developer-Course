class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handeleDeleteOptions = this.handeleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    };
    handeleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    };
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    };
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handeleDeleteOptions={this.handeleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    };
};

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What shoud I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handeleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {
                props.optionText
            }
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error } // same as error: error
        })
        e.target.elements.option.value = '';
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Decision goes here..." name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    };
};

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));
