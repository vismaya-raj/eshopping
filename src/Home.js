import React from "react";
import "./Home.css";
import Product from "./Product";

 export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg"
          alt="Eshop"
          className="home_image"
        />
        <div className="home_row">
          <Product
            title="ZOUK Tote Bags for Women - Handmade Bags for Daily Use - Vegan Leather Handbags with Double Handle - Printed Totes for Women"
            price={1699}
            rating="⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/71lhpSraYML._UL1100_.jpg
            
            "
          />
          <Product
            title="IBELL EO300G Electric Oven Premium Toaster 1600 Watt, Grill OTG with Motorised Rotisserie, 5 Heating Modes, Illuminated Chamber (Black, 30 Liters)"
            price={5076}
            rating="⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/71CVKikYf6L._SX425_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="The Alchemist the Egyptian desert in search of a treasure buried in the Pyramids by All Books Centre"
            price={216}
            rating="⭐⭐⭐⭐⭐"
            
            image="https://m.media-amazon.com/images/I/51FXs5gTmdL._SX427_BO1,204,203,200_.jpg"
          />
          <Product
            title="JBL Flip 4, Wireless Portable Bluetooth Speaker with Mic, Signature Sound with Bass Radiator, Vibrant Colors with Rugged Fabric Design, Connect+, IPX7 Waterproof & AUX (Black)"
            price={6999}
            rating="⭐⭐⭐⭐"
            image="https://in.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf687ad0f/JBL_Flip4_Black_Hero.png"
          />
          <Product
            title="Samsung Galaxy Tab A8 10.5 inches Display, RAM 3 GB, ROM 32 GB Expandable, Wi-Fi Tablets, Gray, (SM-X200NZAAINU)"
            price={20999}
            rating="⭐⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/91veRYPjpeL._SL1500_.jpg"
          />
           
        </div>
        <div className="home_row_last">
        <Product
            title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
            price={13999}
            rating="⭐⭐⭐⭐⭐"
            image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          />
        </div>
      </div>
    </div>
  );
}

