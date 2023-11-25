import { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
export const Models = () => {
    const [models, setModels] = useState([]);
    const [globalmodels, setGlobalmodels] = useState([]);
    useEffect(() => {
        fetch('https://65623293dcd355c08324a83c.mockapi.io/models').then((res) => {
            return res.json();
        }
        ).then((json) => {
            console.log(json);
            setModels(json);
            setGlobalmodels(json);
        })
    }, [])
    const [value, setValue] = useState(0);
    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        let val = e.target.value;
        console.log(globalmodels);

        let js = [];
        let t = {};
        globalmodels.map((m, i) => (
            val === '0' ?
                (t = {
                    "manufacturer": m.manufacturer,
                    "name": m.name,
                    "year": m.year,
                    "id": m.id
                }, js.push(t), console.log(js)) :
                (m.manufacturer === val ?
                    (t = {
                        "manufacturer": m.manufacturer,
                        "name": m.name,
                        "year": m.year,
                        "id": m.id
                    }, js.push(t)) :
                    (t = {})
                )

        )
        )
        console.log(js);
        setModels(js);
    };



    return (

        <div>
            <select value={value} onChange={handleChange}>
                <option value={0}>Все</option>
                <option value={1}>Производитель 1</option>
                <option value={2}> Производитель 2</option>
            </select>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Производитель</th>
                            <th>Название</th>
                            <th>Год</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {models.map((m, i) => <tr key={i}><td>{m.manufacturer}</td><td>{m.name}</td><td>{m.year}</td></tr>)} */}
                        {
                            models.map((m, i) => (
                                <tr key={i}><td>{m.manufacturer}</td><td>{m.name}</td><td>{m.year}</td></tr>
                            )
                            )

                        }
                    </tbody>
                </table>
            </div>
            < button onClick={() => { alert("Добавляем новую модель") }}> Добавить </button>

            <div><Link to="/man">< button > Производители </button>  </Link></div>

        </div>


    )
}
export default Models;