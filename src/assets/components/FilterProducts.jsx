import React from 'react'

const FilterProducts = () => {
    return (
        <div className="products-filter" >
            <button className="filter_all" data-filter="all">All</button>

            <button className="filter_Maleta-Bolso" data-filter=".Maleta-Bolso">Maleta - Bolso</button>

            <button className="filter_Pechera" data-filter=".Pechera">Pechera</button>

            <button className="filter_Portacables" data-filter=".Portacables">Portacables</button>

            <button className="filter_Maleta-Viajera" data-filter=".Maleta-Viajera">Maleta Viajera</button>

            <button className="filter_Manicartera-Organizador" data-filter=".Manicartera-Organizador">Manicartera - Organizador</button>

            <button className="filter_Bolso-Deportivo" data-filter=".Bolso-Deportivo">Bolso Deportivo</button>

            <button className="filter_Organizador-viajero" data-filter=".Organizador-viajero">Organizador viajero</button>

            <button className="filter_Tula" data-filter=".Tula">Tula</button>

            <button className="filter_Maleta" data-filter=".Maleta">Maleta</button>

            <button className="filter_Canguro-Riñonera" data-filter=".Canguro-Riñonera">Canguro - Riñonera</button>

            <button className="filter_Carriel" data-filter=".Carriel">Carriel</button>
        </div>
    )
}

export default FilterProducts