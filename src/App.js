import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./style.css";

function App() {

    const [authentication, setAuthentication] = useState("");


    const handleScan = (result) => {
        if (result) {
            fetch('http://127.0.0.1:3001/codes').then((res) => {
                return res.json();
            }).then((resp) => {
                // console.log(resp);
                if (Object.keys(resp).length === 0) {
                    console.log('Error')
                } else {
                    for (let index = 0; index < resp.length; index++) 
                    {
                        // console.log(resp[index].email);
                        // console.log(result?.text);
                        if (result?.text === "mailto:" + resp[index].email) {
                            // console.log(resp[index].email);
                            setAuthentication("Authorized");
                            break;
                        }
                        else {
                            setAuthentication("Not Authorized");
                        }
                    }
                }
            }).catch((err) => {
                console.log(err);
            });
        }

    }

    return (
        <div className="container">

            <div className="qr-code">
                <p>Welcome to the QR Reader</p>
                <p>Please put your QR code inside the reader</p>

                <QrReader
                    delay={300}
                    onResult={handleScan}
                    style={{ height: 240, width: 320 }}
                    facingMode="environment"
                />
                <p>The Scan result is: </p>
                <h4>{authentication}</h4>

            </div>
        </div>
    );
}

export default App;