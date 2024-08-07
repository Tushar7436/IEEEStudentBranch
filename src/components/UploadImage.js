import  { useState } from 'react';
import cloudinaryConfig from '../cloudinaryConfig';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const uploadImage = async (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setUrl(data.secure_url);
  };

  return (
    <div>
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
};

export default UploadImage;
