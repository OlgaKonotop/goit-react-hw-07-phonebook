// import { configureStore } from '@reduxjs/toolkit';
// import { filtersReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';

// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filtersReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
