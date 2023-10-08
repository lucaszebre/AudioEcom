import '../styles/Features.css';

// Define a type for the Features props
interface FeaturesProps {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
}

const Features = ({
  text1 = '',
  text2 = '',
  text3 = '',
  text4 = '',
  text5 = '',
  text6 = '',
  text7 = '',
  
}: FeaturesProps) => {

    return (
        <div className="FeaturesContainer">
            <div className="FeaturesWrapper">
                <div className="FeaturesContent">
                    <h1 className='FeaturesTitle'>FEATURES</h1>
                    <div className='FeaturesText1'>{text1}</div>
                    <div className='FeaturesText2'>{text2}</div>
                </div>
                <div className="IntheBox">
                    <h1 className='IntheBoxTitle'>IN THE BOX</h1>
                    <div className="InBoxBlock">
                        <div className="IntheBoxCols">
                            <span>1x</span>
                            <div className="IntheboxText">{text3}</div>
                        </div>
                        <div className="IntheBoxCols">
                            <span>2x</span>
                            <div className="IntheboxText">{text4}</div>
                        </div>
                        <div className="IntheBoxCols">
                            <span>1x</span>
                            <div className="IntheboxText">{text5}</div>
                        </div>
                        {text6 && 
                        <div className="IntheBoxCols">
                            <span>1x</span>
                            <div className="IntheboxText">{text6}</div>
                        </div>
                        }   
                        <div className="IntheBoxCols">
                            <span>1x</span>
                            <div className="IntheboxText">{text7}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;

