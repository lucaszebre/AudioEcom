
import Bottom from '../../components/bottom'
import Category from '../../components/category'
import EarsPhoneHome from '../../components/earsPhoneHome'
import Footer from '../../components/footer'
import HeroHome from '../../components/heroHome'
import HeroSpeaker from '../../components/heroSpeaker'
// import Modal from '../../components/modal'
import Nav from '../../components/nav'
import SeeProduct from '../../components/seeProduct'
import './Home.css'
function Home() {

    return (
    <>
    {/* <Modal /> */}
    <div className="RelativeHome">
        <Nav />
            <HeroHome />
    </div>
    <Category 
    marginTop='22em'
    marginBottom='4em'
    />
    <HeroSpeaker />
    <SeeProduct />
    <EarsPhoneHome />
    <Bottom />
    <Footer />


    </>
    )
}

export default Home
