import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className={`w-full bg-secondary`}>
      <div
        className={` max-w-5xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center`}
      >
        <ul className={`text-xl font-medium`}>
          <li className={`p-2 flex`}>
            <FontAwesomeIcon icon={faCheck} className="w-5 text-white mr-2" />
            Niezawodna taksówka w Wałbrzychu 24/7
          </li>
          <li className={`p-2 flex`}>
            <FontAwesomeIcon icon={faCheck} className="w-5 text-white mr-2" />
            Bezpieczna, komfortowa i zawsze punktualna.
          </li>
        </ul>
        <Image src="/taxi.png" width={500} height={500} alt="taxi logo" />
      </div>
    </section>
  );
}
