import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Me from './component/UI/Me';
import Services from './component/UI/Services';
import Portoflio from './component/UI/Portoflio';
import Modal from './component/UI/Modal';
import Contact from './component/UI/Contact';
function App() {

  const yearsOfExperienceSinceGraduation  = (new Date).getFullYear() - 2018;

  useEffect(()=>{
    Aos.init()
  },[])
  return (
<>

<Header/>

<main>
  <Me yearsOfExperience={yearsOfExperienceSinceGraduation} />
  <Services/>
  <Portoflio/>
  <Contact/>
</main>

<Footer/>
</>
    );
}

export default App;
