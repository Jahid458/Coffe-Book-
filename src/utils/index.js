//get all lc 
const getAllFavourites =()=>{
  const all = localStorage.getItem('favoutites')
  if(all){
    const favourites = JSON.parse(all);
    console.log(favourites)
    return favourites
  }else{
    console.log([])
    return []
  }
}

//ad lc 
const addFavourite = (coffee) =>{
  //gewt all previously saved coffe data
  const favourite= getAllFavourites();
  const isExits = favourite.find(item=> item.id == coffee.id);
  if(isExits) return alert('already exits')
  console.log(favourite)
  favourite.push(coffee);
  localStorage.setItem('favoutites', JSON.stringify(favourite))
}

//rmv lc 
const removeFavourite = (id)=>{
  const favourite = getAllFavourites()
  const remained = favourite.filter(coffee => coffee.id != id)
  localStorage.setItem('favoutites', JSON.stringify(remained))
  alert('Succesfully removed!')
}

export {addFavourite,getAllFavourites,removeFavourite}
