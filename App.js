// App.js
import React, {useEffect, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './components/GameScreen';
import WelcomeScreen from './components/WelcomeScreen';
import GameOverScreen from './components/GameOverScreen';
import { GameContext, GameProvider } from './GameContext';


const Stack = createNativeStackNavigator();

export default function App() {

    return (
    <GameProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="GameOver" component={GameOverScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </GameProvider>

  );
}