import React from "react";

function Base() {
  return <button></button>;
}

function Primary() {
  return <Base />;
}

function Secondary() {
  return <Base />;
}

const Button = {
  Primary,
  Secondary,
};

export default Button;
