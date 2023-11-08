<template>
  <div>
    <h2>Upload File with Native HTML5</h2>
    <input type="file" @change="handleFileUpload" />
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      let formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        this.successMessage = `${file.name} uploaded successfully!`;
      } catch (error) {
        this.errorMessage = `File upload failed: ${error.message}`;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.success {
  color: green;
}
</style>
