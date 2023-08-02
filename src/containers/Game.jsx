import React, { useState } from 'react';
import Footer from '../components/Footer';

const Game = () => {

    const [checked, setChecked] = useState(0);
    const [interruptor, setInterruptor] = useState(false);

    const toggleInterruptor = () => {
        setInterruptor(!interruptor);
        setChecked(interruptor ? 0 : 1);
    };

  return (
    <div className=''>
      <h1 className='text-center text-white'>Piedra, Papel o Tigeras</h1>

      <form>
        <input type="radio" id="rock-rock" name="rock-paper-scissors"/>
        <input type="radio" id="rock-paper" name="rock-paper-scissors"/>
        <input type="radio" id="rock-scissors" name="rock-paper-scissors"/>
        <input type="radio" id="paper-rock" name="rock-paper-scissors"/>
        <input type="radio" id="paper-paper" name="rock-paper-scissors"/>
        <input type="radio" id="paper-scissors" name="rock-paper-scissors"/>
        <input type="radio" id="scissors-rock" name="rock-paper-scissors"/>
        <input type="radio" id="scissors-paper" name="rock-paper-scissors"/>
        <input type="radio" id="scissors-scissors" name="rock-paper-scissors"/>
        <div>
            <div id="hands" className="d-flex">
                <section className="d-flex manos">
                    <div className="hand" id="computer-hand">
                        <div className="fist"></div>
                        <div className="finger finger-1"></div>
                        <div className="finger finger-2"></div>
                        <div className="finger finger-3"></div>
                        <div className="finger finger-4"></div>
                        <div className="thumb"></div>
                        <div className="arm"></div>
                    </div>
                    <div className="hand" id="user-hand">
                        <div className="fist"></div>
                        <div className="finger finger-1"></div>
                        <div className="finger finger-2"></div>
                        <div className="finger finger-3"></div>
                        <div className="finger finger-4"></div>
                        <div className="thumb"></div>
                        <div className="arm"></div>
                    </div>
                </section>

                <div className={`d-flex disp${checked}`} id="icons">
                    <div className='d-flex'>
                        <label onClick={()=> toggleInterruptor()} for="rock-rock">✊🏼</label>
                        <label onClick={()=> toggleInterruptor()} for="paper-rock">✊🏼</label>
                        <label onClick={()=> toggleInterruptor()} for="scissors-rock">✊🏼</label>
                    </div>
                    <div>
                        <label onClick={()=> toggleInterruptor()} for="rock-paper">🖐🏼</label>
                        <label onClick={()=> toggleInterruptor()} for="paper-paper">🖐🏼</label>
                        <label onClick={()=> toggleInterruptor()} for="scissors-paper">🖐🏼</label>
                    </div>
                    <div>
                        <label onClick={()=> toggleInterruptor()} for="rock-scissors">✌🏼</label>
                        <label onClick={()=> toggleInterruptor()} for="paper-scissors">✌🏼</label>
                        <label onClick={()=> toggleInterruptor()} for="scissors-scissors">✌🏼</label>
                    </div>
                </div>
            </div>
        </div>
        <div id="message">
            <h2></h2>
            <input type="reset" value="Actualizar" onClick={()=> toggleInterruptor()} />
        </div>
    </form>
      
      <Footer /> 
    </div>
  )
}

export default Game;
