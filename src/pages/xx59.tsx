import React from 'react'
import Layout from '../components/layout'
import ProductCart from '../components/productCart'
import Features from '../components/features'
import DisplayImage from '../components/displayImage'
import AlsoLike from '../components/alsoLike'
import Category from '../components/category'
import Bottom from '../components/bottom'

const XX59 = () => {
    return (
        <>
        <Layout>
    
    <ProductCart 
                imageD="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg" 
                imageT="/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
                imageM="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
                title='XX59
                Headphones'
                description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
                news={true}
                reverse={false}
                details = {true}
                price="899"
                quantity="1"
                />
                <Features
                text1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
                text2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
                text3="Headphones Unit"
                text4="Replacement Earcups"
                text5="User Manual"
                text7="3.5mm 5m Audio Cable"
                />
                <DisplayImage 
                image1D="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
                image1T="/assets/product-xx59-headphones/tablet/image-gallery-1.jpg"
                image1M="/assets/product-xx59-headphones/mobile/image-gallery-1.jpg"
                image2D="/assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
                image2T="/assets/product-xx59-headphones/tablet/image-gallery-2.jpg"
                image2M="/assets/product-xx59-headphones/mobile/image-gallery-2.jpg"
                image3D="/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
                image3T="/assets/product-xx59-headphones/tablet/image-gallery-3.jpg"
                image3M="/assets/product-xx59-headphones/mobile/image-gallery-3.jpg"
                />
                <AlsoLike
                imageD1="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
                imageT1="/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"
                imageM1="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
                title1="XX99 MARK II"
                link1="/XX99MarkIIHeadphones"
                details1={true}
                imageD2="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                imageT2="/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"
                imageM2="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                title2="XX99 MARK I"
                link2="/XX99MarkIHeadphones"
                details2={true}
                imageD3="/assets/product-zx9-speaker/desktop/image-product.jpg"
                imageT3="/assets/product-zx9-speaker/tablet/image-product.jpg"
                imageM3="/assets/product-zx9-speaker/mobile/image-product.jpg"
                title3="ZX9 Speaker"
                link3="/ZX9Speaker"
                details3={true}
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

export default XX59
