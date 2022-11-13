import React from 'react'
import {plantList} from '../datas/plantList'
import '../styles/shoppingListe.css'
import PlantItem from './PlantItem'
// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]
function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
  
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({id,name,cover,water,light}) => (
					// <li key={plant.id} className='lmj-plant-item'>{plant.name}
                    // {/* les conditions
                    // {plant.isBestSale?<span>🔥</span>:null} */
                    // plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
                    // {plant.isSpecialOffer &&  <div className='lmj-sales'>Soldes</div>}
                    // <CareScale careType='light' scaleValue={plant.light}/>
                    // <CareScale careType='water' scaleValue={plant.water}/>
                    
                    // </li>
                    <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                    />
				))}
			</ul>
            
		</div>
	)
  
    // <ul>{plantList.map((plant,index)=> (
    //     <li key={`${plant}-${index}`}>{ plant }</li>
    // ))
    // }</ul>
  
}

export default ShoppingList