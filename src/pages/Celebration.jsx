import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/style.css";

export default function Celebration(){

const navigate = useNavigate();

return(

<div className="celebrationPage">

<Confetti numberOfPieces={200} />

<div className="heartsBackground">
<span>💖</span>
<span>✨</span>
<span>💗</span>
<span>🎀</span>
<span>💞</span>
<span>🌸</span>
<span>💖</span>
<span>✨</span>
</div>

<motion.h1
initial={{scale:0.7,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:1}}
className="celebrationTitle"
>
Happy Birthday Himanshi 🎂
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.5}}
className="celebrationText"
>

Another year of being absolutely amazing 💅  
May your dreams get bigger, your smiles brighter  
and your days filled with happiness ✨  

</motion.p>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:1}}
className="celebrationText"
>

Wishing you success, adventures,  
and a life full of beautiful moments 🌸  

</motion.p>

<motion.button
whileHover={{scale:1.1}}
whileTap={{scale:0.95}}
className="celebrateNextBtn"
onClick={()=>navigate("/questions")}
>

Lets know you a little more 💗

</motion.button>

</div>

)

}