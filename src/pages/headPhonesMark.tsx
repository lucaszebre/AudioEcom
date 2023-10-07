import Layout from '../components/layout'
import ProductCart from '../components/productCart'
import Features from '../components/features'
import DisplayImage from '../components/displayImage'
import AlsoLike from '../components/alsoLike'
import Category from '../components/category'
import Bottom from '../components/bottom'

const HeadphonesMark = () => {
    return (
        <>
        <Layout>
    
    <ProductCart 
                imageD="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" 
                imageT="/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
                imageM="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
                title='XX99 Mark I
                Headphones'
                description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. '
                news={true}
                reverse={false}
                details = {true}
                price="1,750"
                quantity="1"
                />
                <Features
                text1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
                text2="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
                text3="Headphones Unit"
                text4="Replacement Earcups"
                text5="User Manual"
                text7="3.5mm Audio Cable"
                />
                <DisplayImage 
                image1D="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
                image1T="/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg"
                image1M="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"
                image2D="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
                image2T="/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg"
                image2M="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"
                image3D="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
                image3T="/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg"
                image3M="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"
                />
                <AlsoLike
                imageD1="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
                imageT1="/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"
                imageM1="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
                title1="XX99 MARK II"
                link1="/XX99MarkIIHeadphones"
                details1={true}
                imageD3="/assets/product-zx9-speaker/desktop/image-product.jpg"
                imageT3="/assets/product-zx9-speaker/tablet/image-product.jpg"
                imageM3="/assets/product-zx9-speaker/mobile/image-product.jpg"
                title3="ZX9 Speaker"
                link3="/ZX9Speaker"
                details3={true}
                imageD2="/assets/product-xx59-headphones/desktop/image-product.jpg"
                imageT2="/assets/product-xx59-headphones/tablet/image-product.jpg"
                imageM2="/assets/product-xx59-headphones/mobile/image-product.jpg"
                title2="XX59"
                link2="/XX59Headphones"
                details2={true}
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

export default HeadphonesMark
