import React, { useState } from 'react';

const ImageUploadForm = ({ user, setUser }) => {
  const [images, setImages] = useState({});
  
  const handleChange = e => {
    e.persist();
    setImages(e.target.files[0]);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    const data = new FormData();
    data.append('images', images);

    fetch(`/images`, {
      method: 'POST',
      body: data,
    })
    .then((r) => r.json())
    .then((user) => setUser(user))
  };
  
  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="form-group col-5">
        <label>Image upload </label>
        <input type="file" name="image" onChange={handleChange} />
    
        <button className="ui submit basic button center" type="submit">Upload Image</button>
        </div>
      </form>
      <br></br>
    </div>
  )
};

export default ImageUploadForm;