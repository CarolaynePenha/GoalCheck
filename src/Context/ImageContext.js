import { createContext } from "react";
import { useState } from "react";

const ImageContext = createContext();

export function ImageProvider({ children }) {
  let initialImage = "";
  const userImage = localStorage.getItem("image");
  if (userImage) {
    initialImage = userImage;
  }
  const [image, setImage] = useState(initialImage);
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageContext;
