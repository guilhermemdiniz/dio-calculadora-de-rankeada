
import "./index.css";
import { useEffect, useState } from "react";

import { FaFistRaised, FaHorseHead } from 'react-icons/fa';
import { GiArcher, GiSpikedDragonHead, GiRearAura, GiQueenCrown } from 'react-icons/gi';
import { SiLionair } from 'react-icons/si';
import { IoDiamond } from 'react-icons/io5';

/*
* Se vitórias for menor do que 10 = Ferro
* Se vitórias for entre 11 e 20 = Bronze
* Se vitórias for entre 21 e 50 = Prata
* Se vitórias for entre 51 e 80 = Ouro
* Se vitórias for entre 81 e 90 = Diamante
* Se vitórias for entre 91 e 100= Lendário
* Se vitórias for maior ou igual a 101 = Imortal
*/

const ranks = [
  {
    name: "iron", 
    Icon: FaFistRaised
  },
  {
    name: "bronze", 
    Icon: GiArcher
  },
  {
    name: "silver", 
    Icon: FaHorseHead
  },
  {
    name: "gold", 
    Icon: SiLionair
  },
  {
    name: "diamond", 
    Icon: IoDiamond
  },
  {
    name: "legendary", 
    Icon: GiSpikedDragonHead
  },
  {
    name: "immortal", 
    Icon: GiRearAura
  }
];

function App() {

  const [rank, setRank] = useState(null);
  const [victories, setVictories] = useState(0);
  const [defeats, setDefeats] = useState(0);
  
  const win = () => {
    setVictories(victories + 1);
  };
  
  const lose = () => {
    setDefeats(defeats + 1);
  };

  useEffect(() => {
    const score = victories - defeats;
    console.log(score)

    if (score <= 10) setRank(ranks[0]);
    else if (score <= 20) setRank(ranks[1]);
    else if (score <= 50) setRank(ranks[2]);
    else if (score <= 80) setRank(ranks[3]);
    else if (score <= 90) setRank(ranks[4]);
    else if (score <= 100) setRank(ranks[5]);
    else setRank(ranks[6]);

  }, [victories, defeats]);

  return (
    <main className="main">
      <GiQueenCrown className="title" size={24} />
      <h2 className="title space-bottom">YOUR RANK</h2>
      <section className="rank-container">
        <div className={`rank-medal ${rank?.name}`}>
          <div className="rank-info">
            <h3>{rank?.name.toUpperCase()}</h3>
            { rank?.Icon && <rank.Icon size={64} /> }
            <h4>{ victories - defeats }</h4>
          </div>
        </div>
        <div className="shadow"></div>
      </section>
      <section className="secondary">
        <div className="options">
          <button 
            className="option-button lose"
            onClick={ lose }
          >Lose</button>
          <button
           className="option-button win"
           onClick={ win }
          >Win</button>
        </div>
        <div className="info">
          <p className="title">Victories: {victories}</p>
          <p className="title">Defeats: {defeats}</p>
        </div>
      </section>
    </main>
  );
}

export default App;
