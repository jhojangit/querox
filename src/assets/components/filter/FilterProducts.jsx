import React, { useState } from 'react'
import "./filter.css"

const FilterProducts = () => {

    const [stateBtn, setStateBtn] = useState(true)


const closeOpen = () =>{
    stateBtn ? setStateBtn(false) : setStateBtn(true)
}


    return (

        <div className='filter__container'>
            
            <button className='btn__open' onClick={closeOpen}><i class='bx bxs-chevrons-right '></i>categorías</button>

            <div className={`products-filter ${stateBtn ? "close__menu": ""}`} >
                    { /*<button className="filter_all" data-filter="all">Todo</button>*/}
                        
                        <i onClick={closeOpen} class='bx bxs-chevrons-left btnAll bx-tada-hover '></i>

                        <button className="filter_Maleta-Bolso btnAll" data-filter=".Maleta-Bolso">Maleta - Bolso</button>

                        <button className="filter_Pechera btnAll" data-filter=".Pechera">Pechera</button>

                        <button className="filter_Portacables btnAll" data-filter=".Portacables">Portacables</button>

                        <button className="filter_Maleta-Viajera btnAll" data-filter=".Maleta-Viajera">Maleta Viajera</button>

                        <button className="filter_Manicartera-Organizador btnAll" data-filter=".Manicartera-Organizador">Manicartera</button>

                        <button className="filter_Bolso-Deportivo btnAll" data-filter=".Bolso-Deportivo">Bolso Deportivo</button>

                        <button className="filter_Organizador-viajero btnAll" data-filter=".Organizador-viajero">Organizador viajero</button>

                        <button className="filter_Tula btnAll" data-filter=".Tula">Tula</button>

                        <button className="filter_Maleta btnAll" data-filter=".Maleta">Maleta</button>

                        <button className="filter_Canguro-Riñonera btnAll" data-filter=".Canguro-Riñonera">Canguro - Riñonera</button>

                        <button className="filter_Carriel btnAll" data-filter=".Carriel">Carriel</button>
                    </div>

        </div>
       
    )
}

export default FilterProducts