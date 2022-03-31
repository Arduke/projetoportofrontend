import { useEffect, useState } from "react";

function Home() {
    const [movimentations, setMovimentations] = useState([]);
    const [container, setContainer] = useState([]);
    const [sumarry, setSumarry] = useState({sumarryCorpo: [], sumarryTotal: []});

    useEffect(() => {
        fetch('http://localhost:3000/movimentation', {method: 'GET'})
            .then(response => response.json())
            .then(data => setMovimentations(data.movimentations))
            .catch(error => {
                console.log(error.response)
            })

        fetch('http://localhost:3000/container', {method: 'GET'})
            .then(response => response.json())
            .then(data => setContainer(data.containers))
            .catch(error => {
                console.log(error.response)
            })
        
        fetch('http://localhost:3000/movimentation/sumarry', {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                setSumarry({sumarryCorpo: data.sumarryCorpo, sumarryTotal: data.sumarryTotal})
            }).catch(error => {
                console.log(error.response)
            })
    }, [])

    const containers = () => {
        return container.map(item => {
            return (
                <div key={item.id}>
                    <div>{item.category}</div>
                    <div>{item.client}</div>
                    <div>{item.id}</div>
                    <button  onClick={() => {}}>deletar</button>
                </div>
            )
        })
    }

    const movimentation = () => {
        return movimentations.map(item => {
            return (
                <div key={item.id}> 
                    <div>{item.type}</div>
                    <div>{item.dateStart}</div>
                    <div>{item.dateEnd}</div>
                    <button onClick={() => {}} >deletar</button>
                </div>
            )
        })
    }

    const sumarryComponent = () => {
        return <div></div>
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <h3>SUMARIO</h3>
                {sumarryComponent()}
            </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3>Containers</h3>
                {containers()}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}> 
                <h3>Movimentaçoes</h3> 
                {movimentation()}
            </div>
        </div>
        </div>
    );
}

export default Home;