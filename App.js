import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Route} from './src/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/ReduxStore';
import {CartProvider} from './src/AsyncStorage/cartStorage';
import {FavoritesProvider} from './src/AsyncStorage/FavStorage';

const App = gestureHandlerRootHOC(() => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <FavoritesProvider>
            <CartProvider>
              <Route />
            </CartProvider>
          </FavoritesProvider>
        </BottomSheetModalProvider>
      </Provider>
    </SafeAreaProvider>
  );
});

export default App;
