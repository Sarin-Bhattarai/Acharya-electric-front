import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCIIdBHmEHpnS6ycD-B4_a3yzs9M1V0fxI",
  authDomain: "acharya-18b6a.firebaseapp.com",
  projectId: "acharya-18b6a",
  storageBucket: "acharya-18b6a.appspot.com",
  messagingSenderId: "38690962639",
  appId: "1:38690962639:web:7140d8184dc5f2c70bcbba",
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
