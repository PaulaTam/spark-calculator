import { useState } from 'react';  
import { Button , Alert } from 'react-bootstrap';  

const WIPAlert = () => {  
    const [show, setShow] = useState(true);

    if (show){  
    return (  
        <div className="WIP" style={{ padding: "5px", postition: "absolute", bottom: "0" }}>    
            <Alert variant="warning" onClose={() => setShow(false)} dismissible>  
            <Alert.Heading>THIS IS STILL A WORK IN PROGRESS!</Alert.Heading>  
            <p>Please be mindful that some parts may seem incomplete, that's because it is! I'm slowly working on it so, please be patient. Thank you!</p>  
            </Alert>
        </div>  
    );  
    } 

    return(  
    <>  
        <Button className='p-1 m-3' variant='primary' onClick={() => setShow(true)}>Show Alert</Button>  
    </>  
    )  
}

export default WIPAlert;