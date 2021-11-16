 let PizzaCard  = () =>{
        let htmlMenuContainer= '';

        MENU_PIZZA.forEach(({title,logo,price30,price35,description}) => {

            htmlMenuContainer += `
            <div class="menu-section__container">
              <div id="edit" class="edit-container">
              <div class="info-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
              </div>
              <div class="delete-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
              </div> 
              </div>
            <div class="menu-section__pizza-cart">
            <div class="pizza-menu__logo">
                <img src="${logo}" width=298px height=298px>
            </div>
            <div class="pizza-menu__title">
                <h2>${title}</h2>
            </div>
            <div class="btn__pizza">
                <button class="btn__pizza-size">30см</button>
                <button class="btn__pizza-size">35см</button>
            </div>
            <div class="pizza-cart__container">
                <div class="pizza-cart__coast">${price30}р</div>
                <div class="pizza-cart__coast">${price35}р</div>
                <div class="pizza__to-basket">
                    <button class="btn-pizza__to-basket">В корзину</button>
                </div>
            </div>
            <div class="pizza-menu__description">
                <p>${description}</p>
            </div>
        </div>
        </div>
            `;
    });
    
    ROOT_MENU.innerHTML = htmlMenuContainer
}
    
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
      //  console.log(MENU_PIZZA);

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

      //  console.log(MENU_PIZZA);

       PizzaCard();
    });

 