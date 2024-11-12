import styles from "./About.module.css";

import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Programa <span>Recebimento de Compras</span>

        <a>  ****** </a>
      
        <a>Projeto integrador em Computação II</a>
             <p>DRP02 - GRUPO 017</p> 
             
             <div>Mateus dos Santos Cotana</div>
             <div>Ana Maria da Silva Leite</div>
             <div>Fabiana Barrocas Parmigiano</div>
            <div>João Ribeiro Ratto</div>
            <div>Maria Sophia</div>
            <div></div>
            
            
       { /*    <h1  style="color: red"> mudar cor </h1> */}
            
      </h2>
     
       
      
       <Link to="/posts/create" className="btn"> 
        ENTRAR
      </Link> 
  
           UNIVESP
     </div>  


  );
};

export default About;
