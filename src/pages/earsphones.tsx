import Layout from '../components/layout'
import TitleCategory from '../components/titleCategory'
import ProductCart from '../components/productCart'
import Category from '../components/category'
import Bottom from '../components/bottom'

const EarsPhone = () => {
    return (
        <>
            <Layout>
            <TitleCategory
                title='EARPHONES'
                    />
    
                <ProductCart 
                imageD="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" 
                imageT="/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
                imageM="/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
                title='YX1 WIRELESS
                EARPHONES'
                description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
                news={true}
                reverse={true}
                link='/YX1Earphones'
                linked={true}
                />
        
                
                <Category
                    marginTop='3em'
                    marginBottom='3em'
                    />    
                <Bottom />
            </Layout>
        </>
    )
}

export default EarsPhone
