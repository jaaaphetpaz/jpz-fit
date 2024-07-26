import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-3xl md:text-4xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    goals,
    setGoals,
    poison,
    setPoison,
    muscles,
    setMuscles,
    updateWorkout,
  } = props;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMusclez(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (poison === "individual" && muscles.length >= 3) {
      return;
    }

    if (poison === "bodybuilder_split" && muscles.length >= 2) {
      return;
    }

    if (poison !== "individual" && poison !== "bodybuilder_split") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);

    if (
      (poison === "individual" && muscles.length === 2) ||
      (poison === "bodybuilder_split" && muscles.length === 1)
    ) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure :"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={
                "bg-slate-950 px-4 py-3 rounded-lg border duration-200" +
                (poison === type ? " border-orange-500" : " border-blue-400 ")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Dial in"}
        description={"Select the muscles subject to annihilation :"}
      />
      <div className="flex flex-col bg-slate-950 border border-solid rounded-lg border-orange-500">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center "
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle group" : muscles.join(" + ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMusclez(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-orange-500 duration-200 " +
                    (muscles.includes(muscleGroup) ? " text-orange-500" : " ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Unleash the BEAST"}
        description={"Select the ground you want to dominate :"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoals(scheme);
              }}
              className={
                "bg-slate-950 py-3 px-4 rounded-lg border duration-200" +
                (scheme === goals ? " border-orange-500" : " border-blue-400 ")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}
