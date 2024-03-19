import PropTypes from "prop-types";
import Cart from "../cart/Cart";

const CookCart = ({cooks}) => {
    
    return (
        <div className="md:w-1/3">
            <h1 className="text-center font-bold">Want to Cooks: {cooks.length}</h1>
            <div className="flex justify-start lg:gap-12">
                <p>SL</p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {
                cooks.map((cook, index) => <Cart index={index} key={cooks.id} cook={cook}></Cart>)
                
            }
        </div>
    );
};
CookCart.propTypes={
    cooks: PropTypes.object
}
export default CookCart;