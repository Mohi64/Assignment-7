import PropTypes from "prop-types";


const Cart = ({cook, index}) => {
    // console.log(cook.recipe_id) 
    const {recipe_name, preparing_time, calories} = cook;
    return (
        <div>
            
            <div className="flex justify-start lg:gap-10 my-5">
            <p>{index + 1}</p>
            <h3>{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
            <button className="border-2 bg-[#0BE58A] p-2 rounded-full">Preparing</button>
            </div>
        </div>
    );
};
Cart.propTypes={
    cook: PropTypes.object,
    index: PropTypes.number

}
export default Cart;