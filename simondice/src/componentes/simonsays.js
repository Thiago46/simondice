import React, { useState, useEffect } from 'react';
import '../visual/simonsays.css'

let sec = [];
let pos = 0;
let x = 0;

function simonsay(){
    const[dis,setDis] = useState(true);
    const[punt,setPunt] = useState(0);
    const secuencia = () => {
        sec.push(Math.floor(Math.random(1)*4)+1);
    }

    const inicio = () => {
        if(sec.length == 0){
            secuencia();
            encender();
            console.log(sec);
        }
    }

    const verifintento = (a) => {
        if(a.target.value == sec[pos]){
            pos = pos + 1;
        }
        else{
            setPunt(0)
            sec = [];
            pos = 0;
            alert("Perdiste")
        }
        if(sec.length == pos){
            if(sec.length == pos && sec.length != 0){
                setPunt(punt + 1);
            }
            pos = 0;
            x = 0;
            secuencia();
            encender();
            console.log(sec);
        }
    }

    const encender = () => {
        setDis(true);
    
        const verde = document.getElementById('verde');
        const azul = document.getElementById('azul');
        const rojo = document.getElementById('rojo');
        const amarillo = document.getElementById('amarillo');
    
        verde.classList.remove("encendido");
        azul.classList.remove("encendido");
        rojo.classList.remove("encendido");
        amarillo.classList.remove("encendido");
    
        const encenderBoton = (btn) => {
            btn.classList.add("encendido");
            setTimeout(() => {
                btn.classList.remove("encendido");
            }, 300);
        };
    
        const encenderSiguiente = () => {
            if (x < sec.length) {
                if (sec[x] === 1 ) {                    
                    encenderBoton(verde);
                } else if (sec[x] === 2) {
                    encenderBoton(azul);
                } else if (sec[x] === 3) {
                    encenderBoton(rojo);
                } else {
                    encenderBoton(amarillo);
                }
    
                x++;
                setTimeout(() => {
                    encenderSiguiente();
                }, 500);
            } else {
                setDis(false);
            }
        };
    
        encenderSiguiente();
    };
    
    
    
    return(
        <div className="conteiner">
            <div className="botones">
                <button id="verde" className="verde" value={1} onClick={verifintento}></button>
                <button id="azul" className="azul" value={2} onClick={verifintento}></button>
                <button className="btn-inicio" onClick={inicio}><h1>INICIO</h1></button>
                <button id="rojo" className="rojo" value={3} onClick={verifintento}></button>
                <button id="amarillo" className="amarillo" value={4} onClick={verifintento}></button>
            </div>
            <div className='puntuacion'>
                <h2>Tu puntuacion es de: {punt}</h2>
            </div>
        </div>
    )
};

export default simonsay;