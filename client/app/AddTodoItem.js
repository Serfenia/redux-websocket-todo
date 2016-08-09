import {Component, PropTypes} from 'react';
import {IconButton, ListItem, TextField} from 'material-ui';

class AddTodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange({target}) {
        this.setState({
            value: target.value
        });
    }

    handleDoneClick() {
        const state = this.state;
        this.setState({
            value: ''
        }, () => {
            this.props.onSaveTodo({
                content: state.value
            });
        });
    }

    render() {
        return (
            <ListItem
                primaryText={
                    <TextField
                        fullWidth={true}
                        hintText="Add new todo.."
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    />
                }
                rightIconButton={
                    <IconButton
                        disabled={this.state.value === ''}
                        iconClassName="material-icons"
                        onClick={this.handleDoneClick.bind(this)}
                    >
                        done
                    </IconButton>
                }
            />
        )
    }
}

AddTodoItem.propTypes = {
    onSaveTodo: PropTypes.func.isRequired
};

export default AddTodoItem;