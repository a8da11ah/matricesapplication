// let image = document.getElementById('image')
const imageContainer = document.getElementById('image-container')
const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');
const dropZone = document.getElementById('dropZone');



// sliders 
let bSlider = document.getElementById('blurRange');
const redSlider = document.getElementById('redRange');
const greenSlider = document.getElementById('greenRange');
const blueSlider = document.getElementById('blueRange');
console.log(bSlider);



const image = new Image();

  imageInput.addEventListener('change',selectAndDisplay);

  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default drag behavior
  });
  
  dropZone.addEventListener('drop', (event) => {
    // event.preventDefault();
  
    const file = event.dataTransfer.files[0];
  
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (event) => {

        previewImage.src = event.target.result; // Display the selected image in preview
        
        image.src = event.target.result; // Store image for future processing
      };

      reader.readAsDataURL(file); // Read the selected file as data URL

      dropZone.style.display= 'none';
      previewImage.style.display = 'block';
    } else {
      console.error('Please select a valid image file.');
    }
  });


  bSlider.addEventListener('change',function () {
    const range = bSlider.value;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
      console.log('image width:', previewImage.width);
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(previewImage, 0, 0);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const grayscaleImageData = new ImageData(blur(imageData.data,range), imageData.width, imageData.height);
      context.putImageData(grayscaleImageData, 0, 0);
      previewImage.src = canvas.toDataURL();
    

  });
  

function selectAndDisplay() {
    const file = imageInput.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (event) => {

        previewImage.src = event.target.result; // Display the selected image in preview
        
        image.src = event.target.result; // Store image for future processing
      };

      reader.readAsDataURL(file); // Read the selected file as data URL

      dropZone.style.display= 'none';
      previewImage.style.display = 'block';
    } else {
      console.error('Please select a valid image file.');
    }
  }


  function grayEffect() {
  
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
      console.log('image width:', previewImage.width);
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(previewImage, 0, 0);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const grayscaleImageData = new ImageData(grayscale(imageData.data), imageData.width, imageData.height);
      context.putImageData(grayscaleImageData, 0, 0);
      previewImage.src = canvas.toDataURL();
    }
  function reset() {
    previewImage.src = image.src;
  }

  // function blurEffect() {
  
  //   const canvas = document.createElement('canvas');
  //   const context = canvas.getContext('2d');
  //     console.log('image width:', previewImage.width);
  //     canvas.width = image.width;
  //     canvas.height = image.height;
  //     context.drawImage(previewImage, 0, 0);
  //     const imageData = context.getImageData(0, 0, image.width, image.height);
  //     const grayscaleImageData = new ImageData(blur(imageData.data,20), imageData.width, imageData.height);
  //     context.putImageData(grayscaleImageData, 0, 0);
  //     previewImage.src = canvas.toDataURL();
  //   }

  function sepiaEffect() {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(previewImage, 0, 0);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const grayscaleImageData = new ImageData(sepia(imageData.data), imageData.width, imageData.height);
      context.putImageData(grayscaleImageData, 0, 0);
      previewImage.src = canvas.toDataURL();
    }
  function invertEffect() {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(previewImage, 0, 0);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const grayscaleImageData = new ImageData(invert(imageData.data), imageData.width, imageData.height);
      context.putImageData(grayscaleImageData, 0, 0);
      previewImage.src = canvas.toDataURL();
    }
    function edgeEffect() {

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(previewImage, 0, 0);
        const imageData = context.getImageData(0, 0, image.width, image.height);
        const grayscaleImageData = new ImageData(edgeDetection(imageData.data), imageData.width, imageData.height);
        context.putImageData(grayscaleImageData, 0, 0);
        previewImage.src = canvas.toDataURL();
      }















  function grayscale(data) {
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // Set red to grayscale value
      data[i + 1] = avg; // Set green to grayscale value
      data[i + 2] = avg; // Set blue to grayscale value
    }
    return data;
  }
  // function blur(data, radius) {
  //   const width = image.width;
  //   const height = image.height;
  //   const tempData = new ImageData(width, height);
  //   const kernelSize = radius * 2 + 1; // Size of the blur kernel (filter matrix)
  //   const kernel = []; // Initialize empty kernel
  
  //   // Create a Gaussian blur kernel (weights for averaging)
  //   for (let i = 0; i < kernelSize; i++) {
  //     const distance = Math.abs(i - radius);
  //     const weight = 1 / (Math.sqrt(2 * Math.PI) * radius) * Math.exp(-distance * distance / (2 * radius * radius));
  //     kernel.push(weight);
  //   }
  
  //   // Normalize the kernel weights to sum to 1 (important for averaging)
  //   const sum = kernel.reduce((a, b) => a + b, 0);
  //   kernel.forEach((weight, index) => (kernel[index] = weight / sum));
  
  //   // Perform convolution (iterating through each pixel)
  //   for (let y = 0; y < height; y++) {
  //     for (let x = 0; x < width; x++) {
  //       let r = 0;
  //       let g = 0;
  //       let b = 0;
  //       let count = 0;
  
  //       // Apply the kernel around the current pixel
  //       for (let yy = -radius; yy <= radius; yy++) {
  //         for (let xx = -radius; xx <= radius; xx++) {
  //           const newY = Math.max(0, Math.min(y + yy, height - 1));
  //           const newX = Math.max(0, Math.min(x + xx, width - 1));
  //           const index = (newY * width + newX) * 4;
  //           const weight = kernel[Math.abs(yy) + Math.abs(xx)]; // Get weight from kernel
  
  //           r += data[index] * weight;
  //           g += data[index + 1] * weight;
  //           b += data[index + 2] * weight;
  //           count++;
  //         }
  //       }
  
  //       // Set the new pixel value based on the weighted average
  //       const tempIndex = (y * width + x) * 4;
  //       tempData.data[tempIndex] = Math.round(r);
  //       tempData.data[tempIndex + 1] = Math.round(g);
  //       tempData.data[tempIndex + 2] = Math.round(b);
  //       tempData.data[tempIndex + 3] = 255; // Maintain alpha channel
  //     }
  //   }
  
  //   return tempData.data; // Return processed pixel data
  // }
  
  function sepia(data) {
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const sepia = (r * 0.393) + (g * 0.769) + (b * 0.189);
  
      data[i] = sepia; // Set red to sepia value
      data[i + 1] = sepia; // Set green to sepia value
      data[i + 2] = sepia; // Set blue to sepia value
    }
    return data;
  }
  function invert(data) {
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      data[i] = 255 - r; // Invert red
      data[i + 1] = 255 - g; // Invert green
      data[i + 2] = 255 - b; // Invert blue
    }
    return data;
  }
  function contrast(data, adjustment) {
    const factor = (255 + adjustment) / 255;
    const midpoint = 128;
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const deviation = red - midpoint;
      data[i] = midpoint + factor * deviation; // Adjust red with contrast
      deviation = green - midpoint;
      data[i + 1] = midpoint + factor * deviation; // Adjust green with contrast
      deviation = blue - midpoint;
      data[i + 2] = midpoint + factor * deviation; // Adjust blue with contrast
    }
    return data;
  }
  function brightness(data, adjustment) {
    const factor = 1 + adjustment / 100; // Adjust based on a percentage
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, data[i] * factor); // Adjust red
      data[i + 1] = Math.min(255, data[i + 1] * factor); // Adjust green
      data[i + 2] = Math.min(255, data[i + 2] * factor); // Adjust blue
    }
    return data;
  }
  function saturation(data, adjustment) {
    const factor = 1 + adjustment / 100;
    const average = 0.33 * data[0] + 0.59 * data[1] + 0.11 * data[2];
    for (let i = 0; i < data.length; i += 4) {
      const deviation = data[i] - average;
      data[i] = average + factor * deviation; // Adjust red with saturation
      deviation = data[i + 1] - average;
      data[i + 1] = average + factor * deviation; // Adjust green with saturation
      deviation = data[i + 2] - average;
      data[i + 2] = average + factor * deviation; // Adjust blue with saturation
    }
    return data;
  }
  function edgeDetection(data) {
    const width = image.width;
    const height = image.height;
    const tempData = new ImageData(width, height);
    const sobelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1]; // Sobel operator for horizontal edges
    const sobelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1]; // Sobel operator for vertical edges
  
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        let gx = 0;
        let gy = 0;
  
        for (let yy = -1; yy <= 1; yy++) {
          for (let xx = -1; xx <= 1; xx++) {
            const index = (y + yy) * width + (x + xx);
            const r = data[index * 4];
            gx += r * sobelX[yy * 3 + xx];
            gy += r * sobelY[yy * 3 + xx];
          }
        }
  
        const gradient = Math.sqrt(gx * gx + gy * gy);
        const grayscale = Math.min(255, gradient); // Convert to grayscale
  
        const tempIndex = (y * width + x) * 4;
        tempData.data[tempIndex] = grayscale;
        tempData.data[tempIndex + 1] = grayscale;
        tempData.data[tempIndex + 2] = grayscale;
        tempData.data[tempIndex + 3] = 255; // Maintain alpha channel
      }
    }
  
    return tempData.data; // Return processed pixel data
  }
        