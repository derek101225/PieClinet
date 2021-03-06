import {useState} from 'react'
import '../Pies/Pies.css'

const Pies = (props) => {
    const [pies, setPies] = useState([]);
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Name Of Pie</th>
                    <th>Base Of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {}
            </tbody>
        </table>
    )
}


export default Pies;