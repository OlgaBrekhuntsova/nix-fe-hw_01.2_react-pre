import './App.css';
import Header from './components/Header/Header';
import TeamSection from './components/TeamSection/TeamSection';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import MainWrapper from './components/MainWrapper/MainWrapper';
import HeroSection from './components/HeroSection/Hero';

function App() {
  return (

            <Container>
      <Header />
      <MainWrapper>
        <HeroSection/>
         <TeamSection> <SocialLinks/>
        </TeamSection>
        </MainWrapper>
     
      <Footer/>
       </Container>
    
  );
}

export default App;
