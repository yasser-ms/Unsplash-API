import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useGlobalContext } from "./context";
function Gallery() {
  const { searchValue } = useGlobalContext();
  const url = `https://api.unsplash.com/search/photos/?client_id=${
    import.meta.env.VITE_API_KEP
  }`;
  const response = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      try {
        const result = await axios.get(`${url}&query=${searchValue}`);
        return result.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  console.log(response.data);
  if (response.isLoading) {
    return (
      <div className="container">
        <div className="content">
          <p style={{
            fontSize : '60px'
          }}> isLoading...</p>
        </div>
      </div>
    );
  }
  if (response.isError) {
    return (
      <div className="container">
        <p> There was an error</p>
      </div>
    );
  }
  if (response.data.length < 1) {
    return (
      <div className="container">
        <p>resumt not found...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="content">
        {response.data.results.map((image) => {
          const {
            id,
            urls: { small_s3: img },
            alt_description,
          } = image;
          return (
            <div className="content-img">
              <img
                src={img}
                key={id}
                className="fit-img"
                alt={alt_description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
