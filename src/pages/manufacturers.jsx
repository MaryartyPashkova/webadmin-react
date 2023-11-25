import { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
export const Manufacturers = () => {
    const [manufacturer, setManufacturer] = useState([]);
    useEffect(() => {
        fetch('https://65623293dcd355c08324a83c.mockapi.io/manufacturer').then((res) => {
            return res.json();
        }
        ).then((json) => {
            console.log(json);
            setManufacturer(json);
        })
    }, [])
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Название</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manufacturer.map((m, i) => <tr key={i}><td>{m.id}</td><td>{m.name}</td></tr>)}
                    </tbody>
                </table>
            </div>
            < button onClick={() => { alert("Добавляем нового производителя") }}> Добавить </button>
            <div><Link to="/">< button > Модели </button>  </Link></div>
        </div>


    )
}
export default Manufacturers;