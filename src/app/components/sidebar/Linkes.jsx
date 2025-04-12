import Link from "next/link";
const Linkes = ({ label, href, icon }) => {

  return (
    <li className={`font-bold nav-link flex   text-2xl btn-primary hover-link`}>
      <Link href={href}>{label} </Link>
      {icon}
    </li>
  );
};

export default Linkes;
