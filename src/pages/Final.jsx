import { useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { TypeAnimation } from "react-type-animation";
import "../styles/style.css";

export default function Final(){

const audioRef = useRef(null);

useEffect(()=>{

if(audioRef.current){
audioRef.current.volume = 0.6;
audioRef.current.play().catch(()=>{});
}

},[])

return(

<div className="finalPage">

<Confetti numberOfPieces={250} />

<audio ref={audioRef} autoPlay loop>
<source src="/music/birthday.mp3" type="audio/mp3"/>
</audio>

<div className="balloonContainer">

<div className="balloon balloon1"></div>
<div className="balloon balloon2"></div>
<div className="balloon balloon3"></div>
<div className="balloon balloon4"></div>
<div className="balloon balloon5"></div>

</div>

<div className="finalContent">

<TypeAnimation
sequence={[
"Happy Birthday Maahi 💖",
2000,
"Wishing you a year full of happiness ✨",
2000,
"Success in your career 🚀",
2000,
"Beautiful memories and peaceful moments 🌸",
2000,
"And countless smiles every day 😊",
2000
]}
wrapper="h1"
speed={50}
repeat={Infinity}
/>

<p className="finalMessage">

May this new chapter of your life bring  
wonderful adventures, success in everything you pursue,  
and endless joy in your heart.

Stay the amazing person you always are ✨

</p>

<div className="photoSection">

<img
src="/images/himanshi2.png"
className="finalPhoto"
/>

<img
src="/images/himanshi3.png"
className="finalPhoto"
/>

</div>

</div>

</div>

)

}