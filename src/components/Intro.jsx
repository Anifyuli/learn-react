import Button from "./Button";
import { Book } from "lucide-react";
import PropTypes from "prop-types";

export default function Intro({ greeting = "Halo", explanation = "" }) {
  return (
    <>
      <div className="mt-24 md:mt-16">
      <div className="flex flex-col items-center w-full">
        <img
          className="h-20 justify-center"
          src="https://react.dev/_next/image?url=%2Fimages%2Fuwu.png&w=384&q=75"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-5xl text-center">{greeting}</h1>
      </div>
      <div className="flex justify-center my-3">
        <p>{explanation}</p>
        <img className="mx-3 inline" src="/react.svg" alt="" />
      </div>
      <Button
        color="bg-teal-700"
        textValue="Cek Dokumentasi"
        icon=<Book className="inline w-5 h-5 mb-1 ml-1" />
      />
      </div>
    </>
  );
}

Intro.propTypes = {
  greeting: PropTypes.string,
  explanation: PropTypes.string,
};
