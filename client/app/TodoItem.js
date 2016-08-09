import {Component, PropTypes} from 'react';
import {ListItem, IconButton} from 'material-ui';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDeleteClick() {
        this.props.onDeleteTodo(this.props.index);
    }

    render() {
        const todo = this.props.todo;
        const button = (
            <IconButton iconClassName="material-icons" onClick={this.handleDeleteClick.bind(this)}>delete</IconButton>
        );
        return (
            <ListItem
                primaryText={todo.content}
                rightIconButton={button}
            />
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};
TodoItem.defaultProps = {
    todo: {
        content: ''
    }
};

export default TodoItem;