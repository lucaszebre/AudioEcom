import '../styles/CategoryCart.css';
import { Link } from 'react-router-dom';

// Define a type for the CategoryCart props
interface CategoryCartProps {
  image: string;
  title: string;
  link: string;
}

const CategoryCart = ({ image, title, link }: CategoryCartProps) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='CategoryCartContainer'>
      <img className='CategoryCartImage' src={image} alt={title} />
      <div className="CategoryCartWrapper">
        <h3 className='CategoryCartTitle'>{title}</h3>
        <div className='CategoryCartRow'>
          <Link className='Link' onClick={handleScrollToTop} to={link}>
            <p>SHOP</p>
          </Link>
          <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default CategoryCart;

