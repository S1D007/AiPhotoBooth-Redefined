import React, { useState } from "react";

// import crickertImage1 from './assets/cricketers/1.jpg'
// import crickertImage2 from './assets/cricketers/2.jpg'
// import crickertImage3 from './assets/cricketers/3.jpg'
// // import crickertImage4 from './assets/cricketers/4.jpg'
// import crickertImage5 from './assets/cricketers/5.jpg'
// // import crickertImage6 from './assets/cricketers/6.jpg'
// import crickertImage7 from './assets/cricketers/7.jpg'
// // import crickertImage8 from './assets/cricketers/8.jpg'
// import crickertImage9 from './assets/cricketers/9.jpg'
// import crickertImage10 from './assets/cricketers/10.jpg'
// import crickertImage11 from './assets/cricketers/11.jpg'
// import crickertImage12 from './assets/cricketers/12.jpg'
// import crickertImage13 from './assets/cricketers/13.jpg'
// // import crickertImage14 from './assets/cricketers/14.jpg'
// import crickertImage15 from './assets/cricketers/15.jpg'
// import crickertImage16 from './assets/cricketers/16.jpg'
// import crickertImage17 from './assets/cricketers/17.jpg'
// import crickertImage18 from './assets/cricketers/18.jpg'
// import crickertImage19 from './assets/cricketers/19.jpg'
// import crickertImage20 from './assets/cricketers/20.jpg'
// import crickertImage21 from './assets/cricketers/21.jpg'
// import crickertImage22 from './assets/cricketers/22.jpg'
// import crickertImage23 from './assets/cricketers/23.jpeg'
// import crickertImage24 from './assets/cricketers/24.jpeg'
// import crickertImage25 from './assets/cricketers/25.jpeg'

// import a from './assets/hero-heroiens/a.jpeg'
// import b from './assets/hero-heroiens/b.jpeg'
// import one from './assets/hero-heroiens/1.png';
// import two from './assets/hero-heroiens/2.png';
// import three from './assets/hero-heroiens/3.png';
// import four from './assets/hero-heroiens/4.png';
// import five from './assets/hero-heroiens/5.png';
// import six from './assets/hero-heroiens/6.png';
// import seven from './assets/hero-heroiens/7.png';
// import eight from './assets/hero-heroiens/8.png';
// import nine from './assets/hero-heroiens/9.png';
// import ten from './assets/hero-heroiens/10.png';
// import eleven from './assets/hero-heroiens/11.webp';
// import twelve from './assets/hero-heroiens/12.jpeg';
// import thirteen from './assets/hero-heroiens/13.png';
// import fourteen from './assets/hero-heroiens/14.png';
// import fiveteen from './assets/hero-heroiens/15.jpg';
// import sixteen from './assets/hero-heroiens/16.png';
// import eleven from './assets/hero-heroiens/11.png';
// import twelve from './assets/hero-heroiens/12.png';
// import thirteen from './assets/hero-heroiens/13.png';
// import fourteen from './assets/hero-heroiens/14.png';
// import fifteen from './assets/hero-heroiens/15.png';

import anime1 from './assets/anime/anime (1).png';
import anime2 from './assets/anime/anime (2).png';
import anime3 from './assets/anime/anime (3).png';
import anime4 from './assets/anime/anime (4).png';
import anime5 from './assets/anime/anime (5).png';
import anime6 from './assets/anime/anime (6).png';
import anime7 from './assets/anime/anime (7).png';
import anime8 from './assets/anime/anime (8).png';


type SelectAvatarComponentProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
};
const SelectAvatarComponent: React.FC<SelectAvatarComponentProps> = ({
  setCount,
  formData,
}) => {
  // const images = [
  //   crickertImage1,
  //   crickertImage2,
  //   crickertImage3,
  //   crickertImage24,
  //   crickertImage5,
  //   crickertImage25,
  //   crickertImage7,
  //   crickertImage9,
  //   crickertImage10,
  //   crickertImage11,
  //   crickertImage12,
  //   crickertImage13,
  //   crickertImage15,
  //   crickertImage16,
  //   crickertImage17,
  //   crickertImage18,
  //   crickertImage19,
  //   crickertImage20,
  //   crickertImage21,
  //   crickertImage22,
  //   crickertImage23,
  
  // ];
  // const images =  [a, b, two, three, four, five,six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fiveteen, sixteen]
  const images = [anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8]
  const [selected, setSelected] = useState(images[0]);
  const [clicked, setClicked] = useState(false);

  const handleClickGenerate = async () => {
    setClicked(true);
    try {
      const response = await fetch(selected);
      const imageBuffer = await response.arrayBuffer();

      const imageFile = new File([imageBuffer], "image.jpeg", {
        type: "image/jpeg",
      });
      formData.append("target_image", imageFile);

      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="border-dashed flex-1 max-w-[75%] border-black border-2 rounded-3xl p-1">
        <img
          src={selected}
          className="w-full max-h-[35rem] rounded-2xl "
          alt=""
        />
      </div>
      <div
        style={{
          overflow: "scroll", // This will add scrollbars when needed
          // border: "1px solid #ccc",
          flexDirection: "row",
          display: "flex",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        {images.map((imageUrl, index) => (
          <img
            onClick={() => {
              setSelected(imageUrl);
            }}
            key={index}
            src={imageUrl}
            alt={imageUrl}
            style={{
              height: "6rem", // Adjust image width to your preference
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              borderRadius: "0.5rem",
              opacity: imageUrl === selected ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      <div className="flex justify-center items-center w-full gap-10 ">
        <button
          onClick={() => {
            setCount((e) => e - 1);
          }}
          className="mt-4 py-2 px-6 bg-gray-600 text-white rounded-3xl text-xl font-semibold relative overflow-hidden"
        >
          Back
        </button>
        <button
          onClick={() => {
            handleClickGenerate();
          }}
          disabled={clicked}
          className={`mt-4 py-2 px-6 ${
            clicked ? "bg-gray-600" : "bg-black"
          } text-white rounded-3xl text-xl font-semibold relative overflow-hidden`}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default SelectAvatarComponent;