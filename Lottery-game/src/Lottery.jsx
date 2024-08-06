import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 4,winCondition}) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1 style={{color:"pink"}}>Lottery Game!</h1>
      <br />
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={buyTicket} className="buy-ticket">Buy New Ticket</button>
      {isWinning && <h2 style={{ color: "black" }}>Congratulations, You Won!</h2>}
    </div>
  );
}
