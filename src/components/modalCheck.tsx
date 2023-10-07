import '../styles/ModalCheck.css'
const ModalCheck = () => {
    
    

    // function OtherItems(){
        

    //     for (let i = 0; i < ArrayNumber.length; i++) {
    //     if(ArrayNumber[i] > 0){
    //             Number++
    //     }
    //     }
    //     return Number -1
    // }

    // var OtherItem = OtherItems()
    

    // function FirstFind(){
    //     for (let i = 0; i < ArrayNumber.length; i++) {
    //         if(ArrayNumber[i] > 0){
    //             return i
    //         }
    //     }
    //     setModalCheck(false)
    //     return 0
    // }
    // var p = FirstFind()
    return (
        <div className="ModalCheckContainer">
        <div className="ModalCheckWrapper">
            <div className="ModalCheck">
                <img src="/assets/checkout/icon-order-confirmation.svg" alt="icon-order-confirmation" />
                <h1 className='ModalCheckTitle'>THANK YOU FOR YOUR ORDER</h1>
                <p className='ModalCheckDescp'>You will receive an email confirmation shortly.</p>
                <div className="ModalCheckBlock">
                    <div className="ModalCheckBlockLeft">
                        <div className="LeftWrap">
                            {/* <img className="LeftImage" src=
                            {
                                data[p].image
                                } 
                                alt="XX59" /> */}
                            <div className="LeftWrapEn">
                                <h3>
                                    {/* {data[p].title} */}
                                </h3>
                                <p>
                                    {/* {data[p].price} */}
                                </p>
                            </div>
                            <div className="quantity">
                                {/* {ArrayNumber[p]}x */}
                            </div>
                        </div>
                        <p className='otherItems'> and 
                        {/* {OtherItem} */}
                         other items</p>
                    </div>
                    <div className="ModalCheckBlockRight">
                        <h1 className="GrandTotal">
                            GRAND TOTAL
                        </h1>
                        <p className="GrandTotalPrice">
                          {/* $ {Manage.TotalPrice + Manage.TotalPrice * 0.2 + 50} */}
                        </p>
                    </div>
                    </div>
                    <button onClick={()=>{
                        // HandleModalCheckClose()

                    }}
                className='ModalCheckButton'
                >
                    BACK TO HOME
                </button>
                </div>
                
        </div>
    </div>
    )
}

export default ModalCheck

