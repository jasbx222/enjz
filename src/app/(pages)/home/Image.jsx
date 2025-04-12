import Image from "next/image";
import bg from "../../../../public/img/bg.jpg";
export const ImageFile = () => {
  return (
    <Image
      src={bg}
      className="bg -z-10  hidden md:block   fixed top-0  bottom-0"
      width={"100%"}
      height={"100%"}
      alt="img"
    />
  );
};
