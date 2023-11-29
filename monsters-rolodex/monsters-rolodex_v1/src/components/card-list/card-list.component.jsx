import { Component } from "react";
import './card-list.style.css'
import CardContainer from "../card-container/card-container-conponent";

class CardList extends Component {
    render() {
        const { monstersList } = this.props;

        return (
            <div className="card-list">
                {monstersList.map((monster) => {
                    return (
                        <CardContainer name={monster.name} id={monster.id} email={monster.email} key={monster.id} />
                    );
                })}
            </div>
        );
    }
}


export default CardList;