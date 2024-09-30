import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen p-4 max-w-[800px] w-full mx-auto flex flex-col gap-10 text-center items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-orange-500">Jpz</span>Fitness
        </h1>
        <p>TIME TO GET THAT</p>
        <h1 className="uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          SUMMER<span className="text-orange-500">BODY</span>💪🔥
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge the inevitable transformation into an{" "}
        <span className="text-orange-500 font-medium">ABSOLUTE UNIT</span> and
        accept all potential consequences of being mistaken as a{" "}
        <span className="text-orange-500 font-medium">GREEK GOD</span>. I
        promise that I shall navigate this new world of{" "}
        <span className="text-orange-500 font-medium">GODLIKE PHYSIQUE</span>{" "}
        with grace, humility, and an extra-large wardrobe.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
