import React from "react";

const Frutas = (props) => {
  console.log(props);

  return (
    <>
      <ul>
        {props.frutas.map((fruta, index) => (
          <li key={fruta}>
            {index + 1} - {fruta}
          </li>
        ))}
      </ul>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, odit.
        Tempore nulla voluptatum ullam doloribus impedit eveniet natus? Magnam
        voluptate qui velit quasi libero sunt neque, quia quaerat earum
        voluptas?
      </p>
    </>
  );
};

export default Frutas;
