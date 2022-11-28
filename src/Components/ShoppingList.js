import React, { useState } from 'react'
import {plantList} from '../datas/plantList'
import '../styles/shoppingListe.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]
function ShoppingList({cart,updateCart}) {
	const [activeCategory,setActiveCategory]=useState('')
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addToCart(name,price){
		const currentPlantSaved=cart.find((plant)=>plant.name === name)
		if(currentPlantSaved){
			const cartFilteredCurrentPlant=cart.filter(
				(plant)=>plant.name !==name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name,price,amount:currentPlantSaved.amount + 1}
			])
		}else{
			updateCart([...cart,{name,price,amount: 1}])
		}
	}
  
	return (
		<div className='lmj-shopping-list'>
			{/* <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul> */}
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({id,name,cover,water,light,price,category}) => 
					// <li key={plant.id} className='lmj-plant-item'>{plant.name}
                    // {/* les conditions
                    // {plant.isBestSale?<span>🔥</span>:null} */
                    // plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
                    // {plant.isSpecialOffer &&  <div className='lmj-sales'>Soldes</div>}
                    // <CareScale careType='light' scaleValue={plant.light}/>
                    // <CareScale careType='water' scaleValue={plant.water}/>
                    
                    // </li>
					!activeCategory || activeCategory === category ?(
                        <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} price={price}/>
                        <button onClick={()=> addToCart(name,price)} className="lmj-ajouter">Ajouter</button>
                    </div>
					):null
                  
                 
				)}
			</ul>
            
		</div>
	)
  
    // <ul>{plantList.map((plant,index)=> (
    //     <li key={`${plant}-${index}`}>{ plant }</li>
    // ))
    // }</ul>
  
}

export default ShoppingList