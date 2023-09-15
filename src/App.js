import React, {Component} from 'react';
import List from './Components/List';
import Header from './Components/Header';
import Footer from './Components/Footer';
class App extends Component {
  render(){
    return (
      <>  
      <div>
        <Header />
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul='Halaman Footer' nama='Aufa' />
      </div>
      </>
    );
  }
} 
export default App;