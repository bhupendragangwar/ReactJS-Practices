import "./App.css";
import React, { useState } from "react";

import TicketForm from "./components/TicketForm";
import TicketDisplay from "./components/TicketDisplay";

function App() {
  const [ticketData, setTicketData] = useState(null);
  return (
    // <div>
    //   {!ticketData ? (
    //     <TicketForm onGenerate={setTicketData} />
    //   ) : (
    //     <TicketDisplay {...ticketData} />
    //   )}
    // </div>

    <div className="App">
      {!ticketData ? (
        <TicketForm onGenerate={setTicketData} />
      ) : (
        <TicketDisplay {...ticketData} />
      )}
    </div>

  );
}

export default App;
