

document.getElementById('downloadButton').addEventListener('click', exportToSTL);
  let hasImage = false;
  const input = document.getElementById("input");

  input.addEventListener("change", handleImageUpload);



  async function handleImageUpload(event) {
    const file = input.files[0];

    if (file) {
      try {
        const img = await loadImage(file);
        const rgbValues = getRGBValues(img);
        console.log("RGB Values:", rgbValues);
        makeModel(rgbValues,img.width,img.height);
      } catch (error) {
        console.error("Error loading the image:", error);
      }
    }
  }

  async function loadImage(file) {
      return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;
    img.onload = function () {
      // Create a canvas to draw the resized image
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const reductionFactor = Math.round(img.width*img.height/200000);
      console.log(reductionFactor);
      // Calculate the new width and height based on the reduction factor
      const newWidth = img.width / reductionFactor;
      const newHeight = img.height / reductionFactor;

      // Set the canvas dimensions to the new size
      canvas.width = newWidth;
      canvas.height = newHeight;

      // Draw the resized image onto the canvas
      context.drawImage(img, 0, 0, newWidth, newHeight);

      // Convert the canvas content to a data URL
      const resizedDataURL = canvas.toDataURL();

      // Create a new image element with the resized data URL
      const resizedImage = new Image();
      resizedImage.src = resizedDataURL;

      // Resolve the promise with the resized image
      resolve(resizedImage);
    };
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});
}


  function getRGBValues(img) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;

    context.drawImage(img, 0, 0, img.width, img.height);
    const imageData = context.getImageData(0, 0, img.width, img.height);
    let { data } = imageData;

    const bwValues = [];
    try {
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const bw = Math.round((r + g + b) / 3);
        bwValues.push(bw);
      }
    } catch (error) {
      for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const bw = Math.round((r + g + b) / 3);
      bwValues.push(bw);
    }
    
    }
    
    return bwValues.reverse();

  }

  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let cube, wireframe, group;
  function makeModel(rgbValues,width,height) {
      scene.clear();
      let thickness=1;

      let pointsList = []
      for (let j = 0; j < height; j++) {
          for (let i = 0; i < width; i++) {
              pointsList.push(i/(width*0.2)-width/(width*0.4), j/(width*0.2)-width/(width*0.4), (1-thickness*rgbValues[i+j*width]/255+0.1)*0.2);
              pointsList.push(i/(width*0.2)-width/(width*0.4), j/(width*0.2)-width/(width*0.4), 0);
          }
      }
      let points = new Float32Array(pointsList);

      let facesList = []
      for (let j = 0; j < height*2-2; j+=2) {
          //left faces
          facesList.push(j*width, (j+2)*width+1, j*width+1);
          facesList.push(j*width, (j+2)*width, (j+2)*width+1);

          //right faces
          facesList.push(j*width+width*2-2, j*width+width*2-1, (j+4)*width-2);
          facesList.push(j*width+width*2-1, (j+4)*width-1, (j+4)*width-2);

          
          for (let i = 0; i < width*2-2; i+=2) {
              //front faces
              facesList.push(i+j*width, i+j*width+2, i+(j+2)*width);
              facesList.push(i+j*width+2, i+(j+2)*width+2, i+(j+2)*width);


              //back faces
              facesList.push(i+j*width+1, i+(j+2)*width+1, i+j*width+3);
              facesList.push(i+j*width+3, i+(j+2)*width+1, i+(j+2)*width+3);
          }
      }
      for (let i = 0; i < width*2-2; i+=2) {
          //top faces
          facesList.push(i, i+1, i+2);
          facesList.push(i+1, i+3, i+2);

          //bottom faces
          facesList.push(i+width*(height-1)*2, i+width*(height-1)*2+2, i+width*(height-1)*2+1);
          facesList.push(i+width*(height-1)*2+1, i+width*(height-1)*2+2, i+width*(height-1)*2+3);

      }
      const faces = new Uint32Array(facesList);
      // Define vertices

      // Create a buffer geometry
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
      geometry.setIndex(new THREE.BufferAttribute(faces, 1));

      // Create a material with faces
      const material = new THREE.MeshBasicMaterial({ color: 0xb0b0c9, wireframe: false });
      const materialWire = new THREE.MeshBasicMaterial({ color: 0x10101000, wireframe: true });


      //   // Create points
      // const pointsGeometry = new THREE.BufferGeometry();

      // pointsGeometry.setAttribute('position', new THREE.BufferAttribute(points, 3));

      // const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
      // const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);

      // Create a mesh
      cube = new THREE.Mesh(geometry, material);
      wireframe = new THREE.Mesh(geometry, materialWire);

      // Add the cube to the scene

        // Create a group to hold both mesh and points
      group = new THREE.Group();
      cube.rotation=(new THREE.Euler(0,0,0));
      group.add(cube);
      // group.add(pointsMesh);
      group.add(wireframe);
      
      group.scale.set(-10,10,10)
      scene.add(group);

// Add ambient light for better shading
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Add directional light for shadows
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Set up shadow maps
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  if (!hasImage) {
          hasImage=true;
          animate();
      }
  }


  // Animation loop
  function animate() {

      if (group) {
          const radius = 50; // Set the radius of the camera's orbit
          const rotationSpeed = 0.0003; // Set the rotation speed of the camera

          camera.position.x = Math.sin(Date.now() * rotationSpeed) * radius; // Calculate the new x position
          //camera.position.y = Math.sin(Date.now() * rotationSpeed) * radius; // Calculate the new y position
          camera.position.z = Math.cos(Date.now() * rotationSpeed) * radius; // Calculate the new z position
          //camera.position.z = 35; // Calculate the new z position
          camera.position.y = 0; // Calculate the new z position
          camera.lookAt(group.position); // Make the camera look at the group

      renderer.render(scene, camera);
      }
      setTimeout(animate, 20)

  }

  async function exportToSTL() {
      if (!hasImage) {
          return;
      }

      const exporter = new THREE.STLExporter();


      const stlString = exporter.parse(scene);
      
      const blob = new Blob([stlString], { type: 'text/plain' });
      
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'model.stl';
      a.click();
  
}


  // Handle window resize
  window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
  });
