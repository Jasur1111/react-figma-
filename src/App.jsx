
import './App.css';

import ThemeProvider from './context/ThemeContext';
import Homepage from './pages/Homepage';





function App() {
  return (
   
    
     <ThemeProvider>
      <Homepage></Homepage>
     
     </ThemeProvider>
    
  );
}

export default App;
