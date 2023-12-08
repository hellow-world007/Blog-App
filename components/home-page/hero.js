import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/joy.png"
          alt="An image showing Joy"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Joy</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
