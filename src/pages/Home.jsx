import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/style.css";

export default function Home(){

const navigate = useNavigate();

return(

<div className="homePage">

<div className="homeBackground">

<img
src="/images/himanshi1.png"
alt="Himanshi"
className="homeBgImage"
/>

<div className="homeOverlay"></div>

</div>

<motion.div
className="homeCard"
initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="homeTitle">
Hey Maahi 💖
</h1>

<p className="homeSubTitle">
I heard someone just turned
<span className="ageHighlight"> 23 </span>
today ✨
</p>

<p className="homeText">
That sounds like a perfect reason  
to celebrate something magical today 🎉
</p>

<motion.button
className="celebrateBtn"
whileHover={{scale:1.1}}
whileTap={{scale:0.95}}
onClick={()=>navigate("/celebrate")}
>
Celebrate 🎂
</motion.button>

</motion.div>

</div>

)

}