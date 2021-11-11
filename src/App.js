import './App.css';
import Header from './components/Header/Header';
import TeamSection from './components/TeamSection/TeamSection';
import BodyWrapper from './components/generic/BodyWrapper/BodyWrapper';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/Hero';
import FeaturesSection from './components/FeaturesSection/Features';
import SpecializationSection from './components/Specialization/Specialization';
import Container from './components/generic/Container/Container';
import CustomersSection from './components/Customers/Customers';
// import ModalWindow from './components/generic/ModalWindow/ModalWindow';

function App() {
   return (
            <BodyWrapper>
       <Header />
       <main>
       <HeroSection />
       <Container>
         <FeaturesSection />
         <SpecializationSection />                      
       </Container>
       <TeamSection />
       <Container>
            <CustomersSection/></Container></main>
       <Footer />
       {/* <ModalWindow/> */}
       </BodyWrapper>
    
  );
}
export default App;
