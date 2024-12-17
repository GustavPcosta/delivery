import Header from "../../Components/Header"
import OrganicSection from "../../Components/SectionHome"
import CategorySection from "../../Components/CarrouselCategory"

import ProductGrid from "../../Components/Produtos"
import BannerSection from "../../Components/Banner"

import NewsletterSection from "../../Components/News"
import PopularProducts from "../../Components/PopularProdutos"
import JustArrived from "../../Components/JustArrives"
import FeaturedSection from "../../Components/Featured"
import LatestBlogSection from "../../Components/Blog"
import DownloadAppSection from "../../Components/App"
import PeopleLookingFor from "../../Components/Peoples"
import FeaturesSection from "../../Components/PopulaSectio"
import Footer from "../../Components/Footer"
import Footer2 from "../../Components/Footer2"

import PackageIcon from "../../Components/Svg/PackageIcon"


function Home(){
    return(
        
        <div className="home">
        <Header/>
        <OrganicSection/>
        <CategorySection/>
        <ProductGrid/>
        <BannerSection/>
        <FeaturedSection/>
        <NewsletterSection/>
        <PopularProducts/>
        <JustArrived/>
        <LatestBlogSection/>
        <DownloadAppSection/>

        <PeopleLookingFor/>
        <FeaturesSection/>

        <Footer/>
        <Footer2/>
        
        </div>
    )
}


export default Home