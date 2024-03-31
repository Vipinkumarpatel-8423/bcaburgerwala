import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCardHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCardHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={300}
          title="Paneer Burger"
          delay={0.5}
          handler={addToCardHandler}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={burger3}
          price={400}
          title="Nonvage Burger"
          delay={0.8}
          handler={addToCardHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
