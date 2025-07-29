export default function WelComeScreen(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '5%'}}>
            <div style={{margin: '0px'}}>
                <h4 style={{fontSize: '40px'}}>
                    Welcome to the<br />
                    <strong>Frontend Quiz!</strong>
                </h4>
                <p>Pick a subject to get started.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap:'3px', marginTop: '20px'}}>
                <button className="btn display">HTML</button>
                <button className="btn display">CSS</button>
                <button className="btn display">JavaScript</button>
                <button className="btn display">React</button>
                <button className="btn display">Node</button>
            </div>
        </div>
    )
}