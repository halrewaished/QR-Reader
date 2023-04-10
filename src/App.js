import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./style.css";

function App() {
  const [qrscan, setQrscan] = useState("");

  const handleScan = (result, error) => {
    if (result) {
      if (result?.text !== qrscan) {
        setQrscan(result?.text);
      } else {
        console.log("same");
      }
    }
    if (error) {
    //   console.error(error);
    }
  };

  return (
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
      <h4>{qrscan}</h4>
    </div>
  );
}

export default App;
