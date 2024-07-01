import CakePictures from "@/components/CakePictures";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="website-text">
        A place for all kinds of sweets with best quality!
      </h3>
      <CakePictures />
    </div>
  );
};

export default Home;
