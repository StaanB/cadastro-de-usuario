// Icones importados
import { GoPerson } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";

function IconsTopSection({
  PersonIcon = "",
  HomeIcon = "",
  DocumentIcon = "",
}) {
  return (
    <>
      <ul className="icon-top-section">
        <li>
          <GoPerson className={PersonIcon} />
          <span>Identificação do usuário</span>
        </li>
        <li>
          <AiFillHome className={HomeIcon} />
          <span>Endereço do usuário</span>
        </li>
        <li>
          <IoDocumentTextSharp className={DocumentIcon} />
          <span>Sobre você</span>
        </li>
      </ul>
    </>
  );
}

export default IconsTopSection;
