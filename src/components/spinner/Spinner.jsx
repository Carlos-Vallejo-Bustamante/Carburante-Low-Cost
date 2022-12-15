import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Spinn() {
    const [spinner, setspinner] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setspinner(false)
        }, 3000)

    }, [])
    return (
        <div>
            {spinner && <Spinner style={{ width: "4rem", height: "4rem" }} animation="border" variant="success" />}
        </div>
    );
}

export default Spinn;