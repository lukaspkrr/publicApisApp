import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'FreeApi',
      storage: AsyncStorage,
      whitelist: ['pokedex', 'pokemonDetail'],
    },
    reducers,
  );

  return persistedReducer;
};
