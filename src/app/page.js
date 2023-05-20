"use client";
import { useRef, useEffect } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: threeRef.current,
      start: "top top",
      endTrigger: fourRef.current,
      end: "top top",
      pin: true,
      pinSpacing: false,
      onToggle: (self) => console.log("Is active", self.isActive),
    });
    ScrollTrigger.create({
      trigger: fourRef.current,
      start: "top top",
      endTrigger: fiveRef.current,
      end: "top top",
      pin: true,
      pinSpacing: false,
      onToggle: (self) => console.log("Is active", self.isActive),
    });
    ScrollTrigger.create({
      trigger: fiveRef.current,
      start: "top top",
      endTrigger: fiveRef.current,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      onToggle: (self) => console.log("Is active", self.isActive),
    });
  }, []);

  return (
    <>
      <div className={styles.one}>
        <div className={styles.content}>
          <h3>Section One</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
      <div className={styles.two}>
        <div className={styles.content}>
          <h3>Section Two</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
      <div ref={threeRef} className={styles.three}>
        <div className={styles.content}>
          <h3>Section Three</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
      <div ref={fourRef} className={styles.four}>
        <div className={styles.content}>
          <h3>Section Four</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
      <div ref={fiveRef} className={styles.five}>
        <div className={styles.content}>
          <h3>Section Five</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
      <div className={styles.six}>
        <div className={styles.content}>
          <h3>Section Six</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
      <div className={styles.seven}>
        <div className={styles.content}>
          <h3>Section Seven</h3>
          <p>
            Nulla congue venenatis feugiat. Nunc rutrum varius dapibus.
            Suspendisse eu metus erat. Vestibulum id diam quam. Sed quis ornare
            augue. Quisque consequat faucibus risus vitae sollicitudin. Nunc
            lacinia, ipsum ut facilisis pharetra, velit dui venenatis eros, sit
            amet interdum velit nisi at tortor. Nulla maximus magna suscipit,
            feugiat nisi in, faucibus turpis. Maecenas ut faucibus tortor, id
            lacinia est. Sed semper purus pharetra, cursus quam ac, bibendum
            dolor. Integer massa magna, venenatis in elit ac, suscipit varius
            massa. Nullam quis nisi pharetra, rhoncus quam hendrerit, tincidunt
            nisl. Nullam porta est blandit finibus vulputate. Duis id risus a
            odio venenatis pharetra sit amet at nisi. In hac habitasse platea
            dictumst. Ut id tincidunt tellus.
          </p>
        </div>
      </div>
    </>
  );
}
