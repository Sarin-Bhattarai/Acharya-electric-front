import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAMi4OfOn6-vPH5FXFFWlDk_pq7bbCjhns",
  authDomain: "acharya-c842a.firebaseapp.com",
  projectId: "acharya-c842a",
  storageBucket: "acharya-c842a.appspot.com",
  messagingSenderId: "413060531669",
  appId: "1:413060531669:web:fe4193968a2363494c695c",
  measurementId: "G-R1NYSQVVQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(app);

async function handleImageUpload(file, location) {
  if (!file) return null;
  return new Promise((resolve, reject) => {
    var id = uuidv4();
    const storageRef = ref(firebaseStorage, location);
    const imageRef = ref(storageRef, id);

    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (error) => {
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        resolve(downloadURL);
      }
    );
  });
}

async function handleMultipleImageUploads(files, location) {
  if (!files) return null;
  return new Promise(async (resolve, reject) => {
    try {
      const uploadPromises = [];
      console.log(files);
      console.log(files.length);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const id = uuidv4();
        const storageRef = ref(firebaseStorage, location);
        const imageRef = ref(storageRef, id);

        const uploadTask = uploadBytesResumable(imageRef, file);
        const uploadPromise = new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload ${i + 1} is ${progress}% done`);

              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
                  break;
                default:
                  break;
              }
            },
            (error) => {
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

              resolve(downloadURL);
            }
          );
        });
        uploadPromises.push(uploadPromise);
      }

      const downloadURLs = await Promise.all(uploadPromises);
      resolve(downloadURLs);
    } catch (error) {
      reject(error);
    }
  });
}

export { handleImageUpload, handleMultipleImageUploads };
