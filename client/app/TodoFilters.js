import {Component, PropTypes} from 'react';
import {TextField} from 'material-ui';

const style = {
    marginTop: 10,
    marginBottom: 10
};

class TodoFilters extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSearchChange({target}) {
        this.props.onSearchChange(target.value);
    }

    render() {
        return (
            <TextField
                hintText="Search for todos"
                value={this.props.value}
                fullWidth={true}
                style={style}
                onChange={this.handleSearchChange.bind(this)}
            />
        )
    }
}

TodoFilters.propTypes = {
    value: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired
};
TodoFilters.defaultProps = {
    value: ''
};

export default TodoFilters;