import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const Success = () => {

    const order_id = useSearchParams()[0].get('order');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const onSuccess = () => {
            // navigate(`/orders/${order_id}`);
            // setCart([]);
            // localStorage.removeItem('cart');
        }

        const onError = () => {
            window.location.reload();
        }

        // dispatch(fetchOrder(order_id, onSuccess, onError));
    }, 
    // [dispatch, navigate, order_id, setCart]
)

    // return <Loading text={'Processing'}/>
}

export default Success;