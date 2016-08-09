import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoApp from './TodoApp';

import store  from './../store';

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, document.getElementById('app'));
