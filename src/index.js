import {useState, useRef, useEffect} from "react";
import * as ReactDOM from "react-dom";

import "./index.css";

export default function App() {
   const [visiblePopup, setVisiblePopup] = useState(false);
   const ref = useRef();
   console.log(ref.current);

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick);
   }, []);

   const handleOutsideClick = (e) => {
      if (!e.path.includes(ref.current)) {
         setVisiblePopup(false);
      }
      console.log(e);
   }

   function toggleVisiblePopup() {
      setVisiblePopup(!visiblePopup);
   };

   return (
      <div className='sort' ref={ref}>
         <div onClick={toggleVisiblePopup}>
            Сортировать по: <span>популярности</span>
         </div>
         {visiblePopup && (
            <ul>
               <li>популярности</li>
               <li>цене</li>
               <li>рейтингу</li>
            </ul>
         )}
      </div>
   );
}

ReactDOM.render(
      <App/>,
   document.getElementById('root')
);



