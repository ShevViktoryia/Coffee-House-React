import { useState } from "react";
import { MENU_DATA, Product } from "../../mocks";
import s from "./MenuList.module.css";
import { Modal } from "../../../../components/Modal/Modal";

interface MenuListProps {
  mode: string;
}

export const MenuList = ({ mode }: MenuListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className={s.menuSection}>
      <div className="container">
        <div className={s.menuList}>
          {MENU_DATA.map((menu) => {
            const menuItems =
              mode === "coffee"
                ? menu.coffee
                : mode === "tea"
                ? menu.tea
                : menu.dessert;
            if (!menuItems) return null;
            return menuItems.map((item) => (
              <div
                key={item.id}
                className={s.menuCard}
                onClick={() => setSelectedProduct(item)}
              >
                <img src={item.img} alt={item.title} />
                <div className={s.description}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>${item.cost}</p>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
