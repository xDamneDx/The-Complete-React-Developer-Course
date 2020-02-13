import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handeleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption
        }))
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The option already exists'
        };
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            };
        } catch (e) {
            // Do nothing at all
        };
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    };
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';
        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle} 
                />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handeleDeleteOptions={this.handeleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
};
