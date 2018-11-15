export const reveal = () => {
    const revealList = Array.from(document.querySelectorAll(".reveal"));
    console.log(revealList);

    const buffer = 50;

    const greaterThan = (a, b) => a > b;

    const rollIn = ({ container }) => {
      const colorlayer = container.querySelector(".colorlayer");

      const contentlayer = container.querySelector(".contentlayer");

      container.classList.add("visible");

      colorlayer.classList.add("visible");

      wait(400).then(() => {
        contentlayer.classList.add("visible");
      });
    };

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    const visibleOnPage = element => {
      console.log(element);
      const X = element.offsetLeft + element.style.width;
      const Y = element.offsetTop + element.clientHeight + buffer;
      const scrollY = window.scrollY + document.body.clientHeight;
      const scrollX = window.scrollX + window.outerWidth;
      console.log(`X: ${X}, Y: ${Y}, scrollX: ${scrollX}, scrollY: ${scrollY}`);
      return greaterThan(scrollY, Y);
    };

    window.addEventListener("scroll", () => {
      const action = container =>
        visibleOnPage(container)
          ? rollIn({ container })
          : console.log("not Visible");

      revealList.forEach(element => action(element));
    });
  };
