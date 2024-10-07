import { Calendar, Clock } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Footer() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("in-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("in-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <footer className="fixed w-full h-28 left-0 right-0 bottom-0 bg-stone-900 text-white">
        <div className="flex flex-col gap-2 justify-center items-center h-full">
          {/* show dates */}
          <div className="flex flex-row">
            <Calendar className="mx-2" />
            <p className="font-semibold"> {formattedDate}</p>
          </div>

          {/* show clock */}
          <div className="flex flex-row">
            <Clock className="mx-2" />
            <p className="font-semibold">{formattedTime}</p>
          </div>

          {/* show author */}
          <div className="flex flex-row">
            <SiGithub className="mx-2" />
            <a
              href="https://github.com/Anifyuli"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              My GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
