class PizzaCard {


    render() {
        let htmlMenuContainer= '';

        MENU_PIZZA.forEach(({id,title,logo,price30,price35,description}) => {

            htmlMenuContainer += `
            <div class="menu-section__container">
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
}

const productsPage = new PizzaCard();

productsPage.render();