import React, { useState } from "react";
import {
  FaBuffer,
  FaCanadianMapleLeaf,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";
import styles from "../style/testimonials.module.css";
import Button from "./Button";

interface TestimonialProps {
  data: {
    id: number;
    name: string;
    job: string;
    text: string;
    images: string;
  }[];
}
const Testimonioal: React.FC<TestimonialProps> = (props) => {
  const [index, setIndex] = useState(0);

  const IconLeft = FaBuffer;
  const IconRight = FaCanadianMapleLeaf;
  const IconArrowleft = FaAngleLeft;
  const IconArrowright = FaAngleRight;
  const leftHandler = () => {
    if (index === 0) {
      setIndex(props.data.length - 1);
    }
    // if (index - 1 < 0) {
    //   setIndex(props.data.length - 1);
    // }
    else {
      setIndex(index - 1);
    }
  };
  const rightHandler = () => {
    if (index + 1 >= props.data.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const surpriseme = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setIndex(randomNumber);
  };
  return (
    <React.Fragment>
     <div style={{width:'40%',margin:'0px auto'}}>
      <h2> Our Testimonials</h2>
      <div className={styles.centerDiv}>
        <img
          className={styles.setImage}
          src={props.data[index].images}
          alt="Images Not Found"
        />
        <h2>{props.data[index].name}</h2>
        <h3>{props.data[index].job}</h3>
        <IconLeft></IconLeft>
        <p>{props.data[index].text}</p>
        <IconRight></IconRight>
        <div className={styles.buttonFlex}>
          <Button click={leftHandler}>
            {" "}
            <IconArrowleft></IconArrowleft>
          </Button>
          <Button click={rightHandler}>
            <IconArrowright></IconArrowright>{" "}
          </Button>
        </div>
        <Button click={surpriseme}> Surprise Me </Button>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonioal;
