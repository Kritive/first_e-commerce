import logo from './logo.svg';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Navigation from './customer/components/navigation/navigation';

function App() {
  return (
    <div className="">
    <Navigation/>
    <div>
      <HomePage/>
    </div>
     </div>
  );
}

export default App;
