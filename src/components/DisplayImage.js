import React from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import cloudinaryConfig from '../cloudinaryConfig.js';

const DisplayImage = ({ publicId }) => (
  <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
    <Image publicId={publicId}>
      <Transformation width="300" crop="scale" />
    </Image>
  </CloudinaryContext>
);

export default DisplayImage;
