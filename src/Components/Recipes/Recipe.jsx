import PropTypes from "prop-types";

const Recipe = ({ recipe, handleClickToCook }) => {
  const {
    img,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl p-3">
       
        <figure>
          <img src={img} alt={recipe_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{description}</p>
          <p>Ingredients: {ingredients.length}</p>
          <ul className="list-disc">
            {ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <div className="flex gap-10">
            <div className="flex">
              <img src="images/Frame.jpg" alt="" />
              <p>{preparing_time}</p>
            </div>
            <div className="flex">
              <p>
                <img src="images/Vector (1).jpg" alt="" />
              </p>
              <p>
                <span>{calories}</span> Calories
              </p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleClickToCook(recipe)}
              className="btn bg-[#0BE58A] rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleClickToCook: PropTypes.func,
};

export default Recipe;
