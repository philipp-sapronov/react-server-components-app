import React from 'react';

const acceptedExts = ['image/x-png', 'image/jpeg'];

export default function ImageLoader(props) {
  return (
    <div className="image-loader__wrap">
      {props.avatar ? (
        <img className="image-loader__avatar" src={props.avatar} alt="avatar"/>
      ) : (
        <img
          className="image-loader__icon"
          src={'/assets/frame-landscape.svg'}
        />
      )}
      <img className="image-loader__inputIcon" src={'/assets/add-image.svg'} />
      <label className="image-loader__label" htmlFor="fileInput" />
      <input
        ref={props.inpuRef}
        className="image-loader__input"
        id="fileInput"
        type="file"
        name="avatar"
        accept={[...acceptedExts]}
      />
    </div>
  );
}
