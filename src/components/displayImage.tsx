import '../styles/DisplayImage.css';

// Define a type for the DisplayImage props
interface DisplayImageProps {
  image1D: string;
  image2D: string;
  image1T: string;
  image2T: string;
  image1M: string;
  image2M: string;
  image3D: string;
  image3T: string;
  image3M: string;
  // No need to add image3T and image3M props because you used image3D prop for all 3 images
}

const DisplayImage = ({
  image1D,
  image2D,
  image1T,
  image2T,
  image1M,
  image2M,
  image3D,
  image3T,
  image3M,
}: DisplayImageProps) => {
  return (
    <div className="DisplayImageContainer">
        <div className="DisplayImageWrapper">
        <div className="DisplayImageBlock">
          <img className='DisplayImage1D' src={image1D} alt="image1-display" />
          <img className='DisplayImage2D' src={image2D} alt="image2-display" />
          <img className='DisplayImage1T' src={image1T} alt="image1-display" />
          <img className='DisplayImage2T' src={image2T} alt="image2-display" />
          <img className='DisplayImage1M' src={image1M} alt="image1-display" />
          <img className='DisplayImage2M' src={image2M} alt="image2-display" />
        </div>
        <img className='DisplayImage3D' src={image3D} alt="image3-display" />
        <img className='DisplayImage3T' src={image3T} alt="image3-display" />
        <img className='DisplayImage3M' src={image3M} alt="image3-display" />
      </div>
    </div>
  );
};

export default DisplayImage;
