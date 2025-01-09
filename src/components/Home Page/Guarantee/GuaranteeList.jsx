import { IoMdCheckmark } from "react-icons/io";

function GuaranteeListElement({ text }) {
  return (
    <li className="flex gap-2 py-2">
      <span className="text-2xl">
        <IoMdCheckmark />
      </span>
      <p>{text}</p>
    </li>
  );
}

function GuaranteeList() {
  return (
    <ul>
      <GuaranteeListElement text={"Paiement par tiers de confiance"} />
      <GuaranteeListElement text={"Promesse d'authenticité"} />
      <GuaranteeListElement
        text={"Garantie de remboursement dans le monde entier"}
      />
      <GuaranteeListElement
        text={"Des Directives relatives aux professionnels strictes"}
      />
      <GuaranteeListElement text={"Envoi sécurisé"} />
      <GuaranteeListElement text={"Équipe qualité & sécurité"} />
    </ul>
  );
}

export default GuaranteeList;
