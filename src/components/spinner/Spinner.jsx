import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Spinn() {
    const [spinner, setspinner] = useState(true)
    const [alert, setalert] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setspinner(false)
            setalert(true)
        }, 3000)

    }, [])
    return (
        <div>
            {spinner && <Spinner style={{ width: "4rem", height: "4rem" }} animation="border" variant="success" />}
            {alert && <h3>No hay Gasolineras</h3>}
        </div>
    );
}

export default Spinn;