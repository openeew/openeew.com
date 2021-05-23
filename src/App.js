import Landing from './pages/Landing';

import AppContext, { useAppContext } from './context/app';
import './styles/App.scss';

function App() {
  return (
    <AppContext.Provider value={useAppContext()}>
      <Landing />
    </AppContext.Provider>
  );
}

export default App;
