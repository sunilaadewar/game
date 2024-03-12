import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const card1 = [
//   { id: 1, value: "A" },
//   { id: 2, value: "B" },
//   { id: 3, value: "C" },
//   { id: 4, value: "D" },
//   { id: 5, value: "E" },
//   { id: 6, value: "F" },
// ];

// const card2 = [
//   { id: 1, value: "APPLE" },
//   { id: 2, value: "BALL" },
//   { id: 3, value: "CAT" },
//   { id: 4, value: "DOG" },
//   { id: 5, value: "ELEPHANT" },
//   { id: 6, value: "FISH" },
// ];

export const ActivityScreen = () => {
  const [card1, setcard1] = useState([
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
    { id: 4, value: "D" },
    { id: 5, value: "E" },
    { id: 6, value: "F" },
  ]);
  const [card2, setcard2] = useState([
    { id: 1, value: "APPLE" },
    { id: 2, value: "BALL" },
    { id: 3, value: "CAT" },
    { id: 4, value: "DOG" },
    { id: 5, value: "ELEPHANT" },
    { id: 6, value: "FISH" },
  ]);

  const [open, setOpen] = useState(false);
  const [context, setContext] = useState("");
  const [card1Active, setcard1Active] = useState(null);
  const [card2Active, setcard2Active] = useState(null);

  useEffect(() => {
    if (card1Active != null && card2Active != null) {
      if (card1Active === card2Active) {
        setOpen(true);
        setContext("Correct");
      } else {
        setOpen(true);
        setContext("Wrong");
      }

      const timeout = setTimeout(() => {
        setcard1([...card1].sort(() => Math.random() - 0.5));
        setcard2([...card2].sort(() => Math.random() - 0.5));
        setOpen(false);
        setContext("");
        setcard1Active(null);
        setcard2Active(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [card1Active, card2Active]);
  return (
    <>
      <p>ActivityScreen</p>
      <div className=" px-6 m-auto">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="col-span-1 ">
            <div className="grid grid-cols-3 gap-4 ">
              {card1.map((item) => {
                return (
                  <>
                    <div
                      className="col-span-1 w-full h-60 bg-blue-500 text-center text-lg flex justify-center items-center "
                      key={item.id}
                      onClick={() => setcard1Active(item.id)}>
                      <span
                        className={`${
                          card1Active == item.id
                            ? "text-white"
                            : "text-blue-500"
                        }`}>
                        {" "}
                        {item.value}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="grid grid-cols-3 gap-4 ">
              {card2.map((item) => {
                return (
                  <>
                    <div
                      className="col-span-1 w-full h-60 bg-blue-500 text-center text-lg flex justify-center items-center "
                      key={item.id}
                      onClick={() => setcard2Active(item.id)}>
                      <span
                        className={`${
                          card2Active == item.id
                            ? "text-white"
                            : "text-blue-500"
                        }`}>
                        {item.value}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p>{context}</p>

      <Link
        to={"/reward"}
        className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        Next
      </Link>
    </>
  );
};
