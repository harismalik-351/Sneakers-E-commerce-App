import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Route} from './src/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/ReduxStore';

const App = gestureHandlerRootHOC(() => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <Route />
        </BottomSheetModalProvider>
      </Provider>
    </SafeAreaProvider>
  );
});

export default App;
