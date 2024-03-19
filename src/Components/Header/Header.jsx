const Header = () => {
  return (
    // navbar.........................................
    <div>
      <div className="flex justify-between my-3 mx-4">
        <div>
          <h3 className="text-3xl font-bold">Recipe Calories</h3>
        </div>
        <div>
          <ul className="lg:flex gap-4 hidden md:hidden ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div>
          <input
            className="bg-gray-200 rounded-full p-2"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {/* banner section */}
      <div>
        <div
          className="hero h-[500px] rounded-lg overflow-hidden w-full"
          style={{ backgroundImage: "url(./images/coverpic.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-center">
              <h1 className=" text-5xl font-bold">
                Discover an exceptional cooking <br /> class tailored for you!
              </h1>
              <p className="mb-5">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding <br /> problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div>
                <button className="btn bg-green-600 rounded-full p-2 px-3 mx-5">
                  Explore Now
                </button>
                <button className="border-2 p-2 rounded-full ">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-center font-bold mt-10">Our Recipes</h2>
        <p className="text-center my-5">
          A recipe is a formula of ingredients and a list of instructions for
          creating prepared foods. <br /> It is used to control quality,
          quantity, and food costs in a foodservice operation.
        </p>
      </div>
    </div>
  );
};

export default Header;
