import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home/Home';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './contexts/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>     
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>

      <Route path="/homepage">
      <Home></Home>
      </Route>

      <Route exact path="/services">
      <Services></Services>
      </Route>


      <Route path="/signin">
      <SignIn></SignIn>
      </Route>

      <ProtectedRoute path="/services/:type">
      <ServiceDetails></ServiceDetails>
      </ProtectedRoute>
      <ProtectedRoute path="/doctors">
      <Doctors></Doctors>
      </ProtectedRoute>

      <Route path="*">
        <NotFound></NotFound>
      </Route>

    

    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
