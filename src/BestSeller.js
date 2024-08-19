import React, { useRef, useState, useEffect } from 'react';
import CardInfo1 from "./cards-info/card-1"
import CardInfo2 from "./cards-info/card-2"
import CardInfo3 from "./cards-info/card-3"
import CardInfo4 from "./cards-info/card-4"

function BestSeller() {

  // funzione per scrollare
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100, 
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: 'smooth'
      });
    }
  };

  // stato per le card
  const [cardsState, setCardsState] = useState([
    { id: 1, selectedSize: '', isAvailable: false, message: '', cancelButton: '', spuntaButton: '', requestButton: '', availableSizes: ['45', '47.5'], showCheckButton: true  },
    { id: 2, selectedSize: '', isAvailable: false, message: '', cancelButton: '', spuntaButton: '', requestButton: '', availableSizes: ['36', '37.5', '38', '38.5', '40.5', '42', '44', '44.5'], showCheckButton: true },
    { id: 3, selectedSize: '', isAvailable: false, message: '', cancelButton: '', spuntaButton: '', requestButton: '', availableSizes: ['41', '44'], showCheckButton: true  },
    { id: 4, selectedSize: '', isAvailable: false, message: '', cancelButton: '', spuntaButton: '', requestButton: '', availableSizes: ['37.5', '38.5'], showCheckButton: true }
  ]);

  // Gestori di eventi
  function handleSizeChange(event, id) {
    const size = event.target.value;
    const newCardsState = cardsState.map(card =>
      card.id === id ? { ...card, selectedSize: size, message: '', cancelButton: '', requestButton: '', spuntaButton: '', showCheckButton: true } : card
    );
    setCardsState(newCardsState);
  }

  function checkIfAvaible(id) {
    const card = cardsState.find(card => card.id === id);
    if (card.selectedSize) {
      const isAvailable = card.availableSizes.includes(card.selectedSize);
      const newCardsState = cardsState.map(card =>
        card.id === id
          ? {
              ...card,
              message: isAvailable ? '' : 'sold out',
              spuntaButton: isAvailable ? '' : '',
              cancelButton: isAvailable ? '' : '',
              requestButton: isAvailable ? 'Request your pair' : '',
              showCheckButton: false 
            }
          : card
      );
      setCardsState(newCardsState);
    } else {
      const newCardsState = cardsState.map(card =>
        card.id === id ? { ...card, message: 'please select a size' } : card
      );
      setCardsState(newCardsState);
    }
  }


  function hideCheckIfAvaible(id) {
    const newCardsState = cardsState.map(card =>
      card.id === id
        ? { ...card, message: '', cancelButton: '', requestButton: '', spuntaButton: '', showCheckButton: true }
        : card
    );
    setCardsState(newCardsState);
  }

  // order form


    const [isRequested, setIsRequested] = useState(false);
  
    function toggleIsRequested() {
      setIsRequested(true);
    }

    function closeForm(){
      setIsRequested(false)
    }
  



  return (
    <div className="BestSeller-container">
      <button className="scroll-button" id="scroll-left" onClick={scrollLeft}>←</button>
      <div className="BestSeller-div" ref={scrollContainerRef}>

        {cardsState.map((card, index) => {
          const CardInfo = [CardInfo1, CardInfo2, CardInfo3, CardInfo4][index];
          return (
            <div className="BestSeller-card" key={card.id}>
              <CardInfo />
              <select name="request_type" required onChange={(e) => handleSizeChange(e, card.id)} className="styled-select">
                <option value="" disabled selected>Choose size</option>
          <option value="36">36</option>
          <option value="36.5" >36.5</option>
          <option value="37.5" >37.5</option>
          <option value="38" >38</option>
          <option value="38.5" >38.5</option>
          <option value="39" >39</option>
          <option value="40" >40</option>
          <option value="40.5" >40.5</option>
          <option value="41">41</option>
          <option value="42" >42</option>
          <option value="42.5">42.5</option>
          <option value="43" >43</option>
          <option value="44">44</option>
          <option value="44.5" >44.5</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="47.5">47.5</option>
              </select>

              {card.showCheckButton && (
              <button className="checkdisponibility" onClick={() => checkIfAvaible(card.id)}>Check Stock</button>
              )}
              <div className="checkifavailable">
                {card.message && (
                  <div className="sold-out-button">{card.message}</div>
                )}
                <p onClick={() => hideCheckIfAvaible(card.id)}>{card.cancelButton}</p>
                <p onClick={() => hideCheckIfAvaible(card.id)}>{card.spuntaButton}</p>
              </div>

              {card.requestButton && (
                <div className="request-button" onClick={toggleIsRequested}>{card.requestButton}</div>
              )}


            </div>
          );
        })}


      </div>
      <button className="scroll-button" id="scroll-right" onClick={scrollRight}>→</button>

      {isRequested && (
      <div id="order-form">
        <div className="x" onClick={closeForm}>❌</div>
        <input type='text' placeholder='Full name'/>
        <input type='email' placeholder='Email'/>
        <input type='phone' placeholder='Phone number '/>
        <input type='text' placeholder='Full address'/>
        <input type='text' placeholder='Postal code'/>
        <input type='text' placeholder='City'/>
        <select>
        <option value="" disabled selected>Country</option>
          <option>Italy</option>
          <option>Albania</option>
          <option>Andorra</option>
          <option>Armenia</option>
          <option>Austria</option>
          <option>Azerbaijan</option>
          <option>Belarus</option>
          <option>Belgium</option>
          <option>Bosnia and Herzegovina</option>
          <option>Bulgaria</option>
          <option>Croatia</option>
          <option>Cyprus</option>
          <option>Czech Republic</option>
          <option>Denmark</option>
          <option>Estonia</option>
          <option>Finland</option>
          <option>France</option>
          <option>Georgia</option>
          <option>Germany</option>
          <option>Greece</option>
          <option>Hungary</option>
          <option>Iceland</option>
          <option>Ireland</option>
          <option>Kosovo</option>
          <option>Latvia</option>
          <option>Liechtenstein</option>
          <option>Lithuania</option>
          <option>Luxembourg</option>
          <option>Malta</option>
          <option>Moldova</option>
          <option>Monaco</option>
          <option>Montenegro</option>
          <option>Netherlands</option>
          <option>North Macedonia</option>
          <option>Norway</option>
          <option>Poland</option>
          <option>Portugal</option>
          <option>Romania</option>
          <option>Russia</option>
          <option>San Marino</option>
          <option>Serbia</option>
          <option>Slovakia</option>
          <option>Slovenia</option>
          <option>Spain</option>
          <option>Sweden</option>
          <option>Switzerland</option>
          <option>Turkey</option>
          <option>Ukraine</option>
          <option>United Kingdom</option>
        </select>
        <button type='submit' className="submit-button">Submit</button>
      </div>
      )}
    </div>
  );
}

export default BestSeller;
