import { configureStore } from '@reduxjs/toolkit';
import counterMenu from '../features/counter/counterMenu';
import counterItem from '../features/counter/counterItem';

export default configureStore({
    reducer: { counter: counterMenu, item: counterItem },
});
