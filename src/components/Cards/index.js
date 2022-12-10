import "./styles.css";
import Cards from "./Cards.js";

export default function Cards_index({cards}){
    return (

        <div className="card">
            {cards.map((items,i)=>(
                
                <Cards key={i} cards={items}/>
                ))}
       
        
        </div>
    )
}