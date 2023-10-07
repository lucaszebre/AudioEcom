import { Link } from 'react-router-dom';
import '../styles/Bottom.css';
import { Button } from './ui/button';

// Define a type for the Button props
interface ButtonProps {
  onClick?: () => void;
  color?: string;
  border?: string;
  backgroundColor?: string;
  details?: boolean;
  link?: string;
  text?: string;
}

const VarButton = ({
  onClick,
  color = 'black',
  border = 'none',
  backgroundColor = 'transparent',
  details = false,
  link = '',
  text = ''
}: ButtonProps) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={onClick}
      className='ButtonContainer'
      style={{
        color,
        border,
        backgroundColor,
      }}
    >
      {details ? (
        <Link
          onClick={handleScrollToTop}
          style={{
            color,
            textDecoration: 'none',
          }}
          to={link}
        >
          {text}
        </Link>
      ) : (
        text
      )}
    </Button>
  );
};

export default VarButton;

