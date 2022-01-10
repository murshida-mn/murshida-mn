import { createStore } from 'redux';
import reducer from './reducers';

export default function ConfigStore() {
    const store = createStore(reducer);
    return store;
}