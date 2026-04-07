import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                const mat = mesh.material as THREE.MeshStandardMaterial;
                const meshName = mesh.name.toLowerCase();
                
                // Debugging
                console.log(`Mesh: ${meshName}, Color: ${mat.color?.getHex().toString(16)}`);

                if (mesh.material) {
                  const color = mat.color;
                  
                  // Target Shirt: Match by name OR by the original brown color
                  const isOriginalBrown = color && color.r > 0.4 && color.r < 0.7 && color.g > 0.2 && color.g < 0.4;
                  if (meshName.includes("shirt") || meshName.includes("neck") || meshName.includes("body") || isOriginalBrown) { 
                    const newMat = mat.clone();
                    newMat.color = new THREE.Color("#FFFFFF"); // White 
                    newMat.map = null; 
                    mesh.material = newMat;
                  } 
                  // Target Pant: Match by name
                  else if (meshName.includes("pant")) {
                    const newMat = mat.clone();
                    newMat.color = new THREE.Color("#000000"); // Black
                    newMat.map = null;
                    mesh.material = newMat;
                  } 
                  // Other components
                  else if (meshName.includes("shoe") || meshName.includes("sole")) {
                    const newMat = mat.clone();
                    newMat.color = new THREE.Color("#FF0000"); // Red shoes
                    mesh.material = newMat;
                  } else if (meshName.includes("cap")) {
                    const newMat = mat.clone();
                    newMat.color = new THREE.Color("#000000"); // Black cap
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
