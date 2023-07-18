import React, { useState } from 'react';

const ResizableAvatar = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [initialWidth, setInitialWidth] = useState(100);
  const [initialHeight, setInitialHeight] = useState(100);

  const startResize = (e) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialX(e.clientX);
    setInitialY(e.clientY);
    setInitialWidth(avatar.offsetWidth);
    setInitialHeight(avatar.offsetHeight);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  };

  const resize = (e) => {
    if (!isResizing) return;
    const widthChange = e.clientX - initialX;
    const heightChange = e.clientY - initialY;
    const newWidth = initialWidth + widthChange;
    const newHeight = initialHeight + heightChange;

    document.documentElement.style.setProperty('--avatar-width', `${newWidth}px`);
    document.documentElement.style.setProperty('--avatar-height', `${newHeight}px`);
  };

  const stopResize = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
  };

  const startDrag = (e) => {
    e.preventDefault();
    
    // Get the initial position of the avatar
    setInitialX(e.clientX - avatar.offsetLeft);
    setInitialY(e.clientY - avatar.offsetTop);
    setIsDragging(true);
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  };

  const drag = (e) => {
    if (!isDragging) return;
    
    // Calculate the new position of the avatar
    const newLeft = e.clientX - initialX;
    const newTop = e.clientY - initialY;
    
    // Update the position using CSS transform
    avatar.style.transform = `translate(${newLeft}px, ${newTop}px)`;
  };

  const stopDrag = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  };

  return (
    <div id="avatar-container">
      <div
        id="avatar"
        onMouseDown={startResize}
        onMouseMove={drag}
        style={{
          backgroundColor: '#ccc',
          cursor: 'nwse-resize',
          width: `${initialWidth}px`,
          height: `${initialHeight}px`,
          position: 'absolute',
        }}
      ></div>
    </div>
  );
};

export default ResizableAvatar;