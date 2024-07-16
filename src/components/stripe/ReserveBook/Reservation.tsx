import './reservation.css'
import Payment from '../PaymentForm'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

function Reservation(){

    return (
        <>
        <div className="lipa">
            <Navbar />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-55%)' }}  className="bg-gray-400 px-16 pb-2 rounded-lg">

                <div className="item-details text-black"><h3>Booking Payment Form</h3>
                    </div>

                <hr />
                <br />
                <Payment />
            </div>

        </div>
            <Footer />
            </>
    )
}

export default Reservation