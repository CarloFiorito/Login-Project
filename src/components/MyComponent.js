// Non si aggiungono le funzioni di aggiornamento di stato
// (come setFormIsValid)

// Non è necessario aggiungere le API built-in, oppure le funzioni
// come fetch(), map(), split() ecc.., localStorage perchè
// sono funzioni globali e non sono legate a React e nemmeno al suo ciclo
// di rendering

// Non aggiungiamo variabili o funzioni che abbiamo definito AL DI FUORI del
// componente principale. Siccome non sono create al suo interno il loro
// cambio non influenza il nostro componente, non porta alla rivalutazione

// Quindi possiamo aggiungere tutte quelle "cose" che usiamo all'interno
// della funzione useEffect SE queste cose possono cambiare, perchè il
// nostro componente viene rivalutato

import React, { useEffect, useState } from "react";

let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
  const { timerDuration } = props;

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};

// timerIsActive: viene aggiunto come dipendenza perchè il suo stato
// può cambiare quando cambia il componente (per es. quando lo stato è
// stato aggiornato)

// timerDuration: viene aggiunto perchè è il valore relativo ad una
// props di quel componente, quindi può cambiare se un componente padre
// modifica quel valore

// setTimerIsActive: NON viene aggiunto perchè fa parte di quelle eccezioni:
// le funzioni di aggiornamento di stato possono essere aggiunte ma non c'è
// bisogno perchè React garantisce che quella funzione non cambierà mai

// myTimer: NON viene aggiunta perchè non è una variabile interna al nostro
// componente. E' definita FUORI dal componente e se cambia NON porta
// alla rivalutazione del nostro componente

// setTimeout: NON viene aggiunta come dipendenza perchè è un API built-in
// è indipendente da react e il nostro componente NON cambia
