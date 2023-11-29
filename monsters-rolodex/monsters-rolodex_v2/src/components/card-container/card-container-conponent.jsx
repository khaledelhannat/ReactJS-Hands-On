import './card-container.style.css'

const CardContainer = ({ name, id, email }) => (
    <div className="card-container">
        <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id + 200}?set=set2`}
        />

        <h2>{name}</h2>
        <h2>{email}</h2>
    </div>
);


export default CardContainer;