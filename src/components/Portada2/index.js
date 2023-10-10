import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listINVENTARIOS } from "@/graphql/queries";  // Asegúrate de que esta ruta sea correcta
import _ from 'lodash';  // Debounce viene de lodash

const Portada2 = ({ setShowResponse, setRespuesta }) => {

    const [messageUserNow, setMessageUserNow] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    // Esto es un simple helper para la función debounce
    function debounce(func, wait) {
        let timeout;

        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }


    const fetchMedicamentosFiltered = async (query) => {
        if (!query || query.length < 3) {
            setFilteredData([]);
            return;
        }

        try {
            const result = await API.graphql(
                graphqlOperation(listINVENTARIOS, {
                    filter: { nombreProducto: { contains: query } },
                    limit: 10000
                })
            );
            console.log("Respuesta de AppSync:", result);
            const data = result?.data?.listINVENTARIOS?.items || [];
            setFilteredData(data);
        } catch (error) {
            console.error("Error al obtener medicamentos:", error);
        }
    };

    const debouncedFetch = debounce(fetchMedicamentosFiltered, 300);


    const llenarMensaje = (e) => {
        const query = e.target.value.toLowerCase();
        setMessageUserNow(query);
        debouncedFetch(query);
    };

    const selectProduct = (productName) => {
        setMessageUserNow(productName);
        setFilteredData([]);  // Esconde las sugerencias una vez seleccionado
    };

    return (
        <div className="relative">
            <input
                spellCheck
                value={messageUserNow}
                onChange={(e) => llenarMensaje(e)}
                type="text"
                placeholder="Escribe el nombre del producto o tu malestar"
                className="py-5 px-3 rounded-lg bg-white text-gray-500 font-bold w-full focus:outline-none"
            />
            <div className="results-container">
                {filteredData.map((item) => (
                    <div key={item.id} className="result-item">
                        <img src={item.urlImagen} alt={item.nombreProducto} />
                        <p>{item.nombreProducto}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Portada2;
