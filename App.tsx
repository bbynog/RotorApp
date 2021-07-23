import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationTabs } from './app/src/infrastructure/navigation/navigation-tabs';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './app/src/infrastructure/theme';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app/src/infrastructure/redux/reducers';

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
    const store = createStore(rootReducer);

    const [oswaldLoaded] = useOswald({ Oswald_400Regular });
    const [latoLoaded] = useLato({ Lato_400Regular });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <NavigationContainer>
                        <NavigationTabs />
                    </NavigationContainer>
                </PaperProvider>
            </Provider>
        );
    }
}
