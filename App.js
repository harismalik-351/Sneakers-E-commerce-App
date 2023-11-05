import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Route} from './src/Navigation';

const App = gestureHandlerRootHOC(() => {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <Route />
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
});

export default App;
