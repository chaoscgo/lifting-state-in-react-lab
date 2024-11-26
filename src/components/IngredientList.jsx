
const IngredientList = (props) => {

    const handleOnClick = (ingredient) => {
      props.addToBurger(ingredient);
    }
   
    return (
       <>
        <ul>
          {props.availableIngredients.length > 0 ? props.availableIngredients.map((ingredient, index) => {
            return (
              <div className="ingredient">
                <li key={index} style={{ background: ingredient.color }}>
                  {ingredient.name}
                  <button onClick={() => handleOnClick(ingredient)}>+</button>
                </li>
              </div>
            )
          })
          :
          <p>Not found</p>
          }
        </ul>
       </> 
    )
};
  
export default IngredientList;
  