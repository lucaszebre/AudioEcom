import '../styles/Category.css'
import CategoryCart from './categoryCart'


const Category = (props:
    {marginTop?:string,
    marginBottom?:string}) => {
    return (
    <div className='CategoryContainer'
    style={{        // This is for the margin top and bottom
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
    }
    }
    >
        <CategoryCart  image='/assets/shared/desktop/image-category-thumbnail-earphones.png' title='EARPHONES' link="/earsphones" />
        <CategoryCart  image='/assets/shared/desktop/image-category-thumbnail-speakers.png' title='SPEAKER' link="/speakers" />
        <CategoryCart image='/assets/shared/desktop/image-category-thumbnail-headphones.png'  title='HEADPHONES' link="/headphones" />
    </div>
    )
}

export default Category
