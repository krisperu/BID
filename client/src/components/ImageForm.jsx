import React, { useState } from 'react';

const ImageUploadForm = ({ user }) => {
  const [images, setImages] = useState({});
  
  const handleChange = e => {
    e.persist();
    setImages(e.target.files[0]);
  };

//   function onCreateImage(newImage) {
//       setImages([...images, newImage])
//   }
  
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('images', images);

    fetch(`/images`, {
      method: 'POST',
      body: data,
    })
    // .then((r) => r.json())
    // .then((data) => onCreateImage(data))
  };

  // console.log(user.images)
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Image upload </label>
        <input type="file" name="image" onChange={handleChange} />
    
        <input type="submit" />
      </form>
    </div>
  )
};

export default ImageUploadForm;