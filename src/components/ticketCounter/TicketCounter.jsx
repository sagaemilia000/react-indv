import "./ticketCounter.css";

function TicketCounter({ value, price, onChange }) {
  const increase = () => {
    onChange(value + 1);
  };

  const decrease = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div className="ticket-counter">
      <section className="ticket-counter__controls">
        <p className="ticket-counter__total"> {value * price} SEK</p>
            <article className="ticket-counter__counter">
                <button className="ticket-counter__btn" onClick={decrease}>–</button>
                <span className="ticket-counter__value">{value}</span>
                <button className="ticket-counter__btn" onClick={increase}>+</button>
            </article>
      </section>
    </div>
  );
}

export default TicketCounter;