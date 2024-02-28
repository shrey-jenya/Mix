import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TodoSlice from "../features/TodoSlice";

const persistConfig = {
	key: "root",
	storage: storage,
	// blackList:['setSearchQuery']
};

const persistedReducer = persistReducer(persistConfig, TodoSlice);

const store = configureStore({
	reducer: {
		todo: persistedReducer,
	},
});

const persistor = persistStore(store);

export { store, persistor };
