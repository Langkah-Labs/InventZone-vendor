import React from "react";
// Components
import Footer from "./Footer";

export default function Index(props: any) {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  );
}
