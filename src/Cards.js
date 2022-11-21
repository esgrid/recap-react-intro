
// I had props as a paramater
// Then changed it to {number}
function Cards({number}){

    const result = <section><h3>Card {number}</h3><p>This is card {number}</p></section>
    return(
        result
    )
}

export default Cards;