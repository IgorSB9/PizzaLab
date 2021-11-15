
    class NewPizzaCard {
      constructor(logo, title, price30, price35, description) {
        this.logo = logo,
        this.title = title,
        this.price30 = price30,
        this.price35 = price35,
        this.description = description
      }
    }
    
    let addButton = document.querySelector(".modal-window__btn-add");
    
    addButton.addEventListener('click', (e) => {
       e.preventDefault();
       console.log(MENU_PIZZA);

       let data = {
         logo: document.querySelector(".pizza-img__link").value,
         title: document.querySelector(".pizza-title__input").value,
         price30: document.querySelector(".pizza-img__link30").value,
         price35: document.querySelector(".pizza-img__link35").value,
         description: document.querySelector(".pizza-description__input").value
      }
     
       MENU_PIZZA.push(new NewPizzaCard(
         data.logo,
         data.title,
         data.price30,
         data.price35,
         data.description
       ))
     
       document.querySelector(".pizza-img__link").value = "";
       document.querySelector(".pizza-title__input").value = "";
       document.querySelector(".pizza-img__link30").value = "";
       document.querySelector(".pizza-img__link35").value = "";
       document.querySelector(".pizza-description__input").value = "";

       console.log(MENU_PIZZA);
    });

 