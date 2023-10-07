import VarButton from './button';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCart.css'
// import AddtoCart from '../styles/AddtoCart.css';
const ProductCart = (props: {
    news?: boolean,
    title?: string,
    description?: string,
    details?: boolean,
    reverse?: boolean,
    imageD?: string,
    imageT?: string,
    imageM?: string,
    link?: string,
    linked?: boolean,
    price?: string,
    quantity?: string
}) => {
    const navigate = useNavigate();
    return (
        <div className="ProductCartContainer">
            {props.details && <div  className="goback">
                <p onClick={()=>{navigate(-1)}} className='gobacklink'>Go back</p> </div>}
            <div className="ProductCartWrapper"
            style={{
                flexDirection: props.reverse ? 'row-reverse' : 'row',
            }
            }
            >
                <img className='ProductCartImageD' src={props.imageD} alt={props.title} />
                <img className='ProductCartImageT' src={props.imageT}  alt={props.title} />
                <img className='ProductCartImageM' src={props.imageM}  alt={props.title} />
                <div className="ProductCartText">
                    {props.news && <h2>NEW PRODUCT</h2>}
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    {!props.details &&
                    <VarButton 
            
                    text='SEE PRODUCT'
                    color='white'
                    backgroundColor='#D87D4A'
                    border='none'
                    link={props.link}
                    details={props.linked}
                    />}
                        {/* {props.details && <AddtoCart
                // price={props.price}
                // quantity={props.quantity}
                />} */}
                </div>
                            
            </div>
        </div>
    )
}

export default ProductCart
