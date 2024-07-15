import './reservation.css'
import Payment from '../PaymentForm'

function Reservation(){

    return (
        <div className="lipa">
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%,-50%)' }}>

                <div className="item-details"><h3>Booking Payment Form</h3>
                    </div>

                <hr />
                <br />
                <Payment />
            </div>

        </div>
    )
}

export default Reservation