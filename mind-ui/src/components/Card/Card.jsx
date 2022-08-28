import React from "react";
import "./Card.css";

export const imageList = [
  "https://images.unsplash.com/photo-1417024225833-10a6ab08aa51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW5yeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1529782891902-61b57cb8041c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW5yeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1533035336122-4327d347d2fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1489644484856-f3ddc0adc923?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyZWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

function Card(props) {
  return (
    <div className="card-container">
      <h3> Card </h3>
      <p>
        Cards contain content and actions related to a single subject or entity
      </p>
      <h3> Usage </h3>
      <h3> Cards with Image and Text </h3>
      <div className="card-examples">
        <div className="card card--width">
          <img className="img--responsive" src={imageList[0]} alt="" />
          <h2 className="card__heading"> Card Heading </h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            numquam itaque quisquam harum dicta ea, eveniet aperiam eum
            repudiandae, sapiente nobis. Natus dignissimos nobis quisquam itaque
            impedit eos quos doloribus.
          </p>
        </div>
        <div className="card card--width">
          <img className="img--responsive" src={imageList[1]} alt="" />
          <h2 className="card__heading"> Card Heading </h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            numquam itaque quisquam harum dicta ea, eveniet aperiam eum
            repudiandae, sapiente nobis. Natus dignissimos nobis quisquam itaque
            impedit eos quos doloribus.
          </p>
        </div>
      </div>
      <h3> Card with Badges </h3>
      <div className="card-examples">
        <div className="card card--width">
          <div className="card__badge"> NEW </div>
          <img className="img--responsive" src={imageList[3]} alt="" />
          <h2 className="card__heading"> Card Heading </h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            numquam itaque quisquam harum dicta ea, eveniet aperiam eum
            repudiandae, sapiente nobis. Natus dignissimos nobis quisquam itaque
            impedit eos quos doloribus.
          </p>
        </div>
      </div>
      <h3> Horizontal Cards </h3>
      <div className="card-examples">
        <div className="card--horizontal">
          <img className="img--horizontal" src={imageList[4]} alt="" />
          <div className="card card__content--horizontal">
            <h2 className="card__heading"> Card Heading </h2>
            <p className="card__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              numquam itaque quisquam harum dicta ea, eveniet aperiam eum
              repudiandae, sapiente nobis. Natus dignissimos nobis quisquam
              itaque impedit eos quos doloribus.
            </p>
          </div>
        </div>
      </div>
      <h3> Notes : </h3>
      <p>
        The images used for showing the Avatar are obtained from&nbsp;
        <span>
          <a className="anchor" href="https://unsplash.com/">Unsplash.com</a>
        </span>
        .
      </p>
    </div>
  );
}

export default Card;
