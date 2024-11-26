
const BurgerStack = (props) => {
    
    const handleOnClick = (ingredient) => {
      props.removeFromBurger(ingredient);
    }
   
    return (
       <>
        <ul>
          {props.stack.length > 0 ? props.stack.map((ingredient, index) => {
            return (
              <div className="ingredient">
                <li key={index} style={{ background: ingredient.color }}>
                  {ingredient.name}
                  <button onClick={() => handleOnClick(ingredient)}>X</button>
                </li>
              </div>
            )
          })
          :
          <p>No ingredients</p>
          }
        </ul>
       </> 
    )
};
  
export default BurgerStack;

  

    
  