<template>
  <div>
    <h1>Imagekit File Upload Example</h1>
    <ik-upload
      :useUniqueFileName="true"
      :onSuccess="handleSuccess"
      :onError="handleError"
      :publicKey="publicKey"
      :urlEndpoint="urlEndpoint"
      :authenticationEndpoint="authenticationEndpoint"
    >
      <button>Upload</button>
    </ik-upload>
    <!-- Error message -->
    <div v-if="uploadError" class="error-message">
      {{ uploadError }}
    </div>

    <!-- Display the uploaded file -->
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded file" />
  </div>
</template>

<script>
import { IKUpload } from "imagekitio-vue";
import ImageKit from "imagekit-javascript"

const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
const authenticationEndpoint = import.meta.env.VITE_AUTHENTICATION_ENDPOINT;

export default {
  name: "ImageKitExample",
  data() {
    return {
      publicKey,
      urlEndpoint,
      authenticationEndpoint,
      imageUrl: "",
      uploadError: null,
    };
  },
  components: {
    IkUpload: IKUpload,
  },
  methods: {
    handleSuccess(result) {
      console.log(result);
      // Generate optimized and transformed URLs for the uploaded files
      const imagekit = new ImageKit({
        urlEndpoint: this.urlEndpoint,
        publicKey: this.publicKey,
      });

      this.imageUrl = imagekit.url({
        path: result.filePath,
        transformation: [{ height: 300, width: 400 }],
      });

      console.log(this.imageUrl);
    },
    handleError(err) {
      console.error(err);
      this.uploadError = `Error uploading file: ${err}`;
    },
  },
};
</script>
