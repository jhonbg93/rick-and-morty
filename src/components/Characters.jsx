import react from "react";

const Characters = ({characters = []}) =>{
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col">
                    <div className="card mt-3" atyle={{minWidth: "200px"}}>
                        <img src={item.image} alt="imagen" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Location: {item.location.name}</p>
                            <p>Species: {item.species}</p>
                            
                        </div>
                    </div>
                </div>     
                ))
            }
        </div>
    )
} 

export default Characters