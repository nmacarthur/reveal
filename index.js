
import { ElementObserver }  from 'viewprt';

const Reveal = () => {
    const revealList = Array.from(document.querySelectorAll(".reveal"));

    revealList.forEach(element => {
      console.log(element);
      const observer = new ElementObserver(element, {
        
      })
    })

  };

  export { Reveal };