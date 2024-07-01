import "../app/css/cakePictures.css";
import Image from "next/image";

const CakePictures = () => {
  return (
    <div className="page-cakes">
      <div className="each-main-cake">
        <Image
          src={"/images/main-page-cake1.jpg"}
          alt="cake1"
          width={300}
          height={300}
          className="each-main-cake-image"
        />
        <h4 className="text-center font-bold text-xl">Cake 1</h4>
      </div>
      <div className="each-main-cake">
        <Image
          src={"/images/main-page-cake2.jpg"}
          alt="cake1"
          width={300}
          height={300}
          className="each-main-cake-image"
        />
        <h4 className="text-center font-bold text-xl">Cake 2</h4>
      </div>
      <div className="each-main-cake">
        <Image
          src={"/images/main-page-cake3.jpg"}
          alt="cake3"
          width={300}
          height={300}
          className="each-main-cake-image"
        />
        <h4 className="text-center font-bold text-xl">Cake 3</h4>
      </div>
      <div className="each-main-cake">
        <Image
          src={"/images/main-page-cake4.jpg"}
          alt="cake4"
          width={300}
          height={300}
          className="each-main-cake-image"
        />
        <h4 className="text-center font-bold text-xl">Cake 4</h4>
      </div>
    </div>
  );
};

export default CakePictures;
