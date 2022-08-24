import { configureStore } from '@reduxjs/toolkit';
import counterMenu from '../features/counter/counterMenu';

export default configureStore({
    reducer: { counter: counterMenu },
});
