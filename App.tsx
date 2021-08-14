import React, { createContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationTabs } from './app/src/infrastructure/navigation/navigation-tabs';
import { souls } from './app/src/infrastructure/contexts/souls';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './app/src/infrastructure/theme';

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
    const [oswaldLoaded] = useOswald({ Oswald_400Regular });
    const [latoLoaded] = useLato({ Lato_400Regular });

    const SoulsContext = createContext(souls);

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    } else {
        return (
            <SoulsContext.Provider value={souls}>
                <PaperProvider theme={theme}>
                    <NavigationContainer>
                        <NavigationTabs />
                    </NavigationContainer>
                </PaperProvider>
            </SoulsContext.Provider>
        );
    }
}
