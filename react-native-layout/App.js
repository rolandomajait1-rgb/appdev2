import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
  const [screen, setScreen] = useState('login');

  return (
    <>
      {screen === 'login' ? (
        <Login onNavigate={() => setScreen('signup')} />
      ) : (
        <Signup onNavigate={() => setScreen('login')} />
      )}
      <StatusBar style="auto" />
    </>
  );
}
