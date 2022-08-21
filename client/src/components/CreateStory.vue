<template>
    

<form @submit.prevent="handleSubmit"
class="login100-form validate-form">
  <div class="form-group">
    <label for="exampleInputEmail1">Upload Story</label>
    <input type="file" class="input100" name="story" id="story" ref="story"  placeholder="Upload photo" v-on:change="onChangeFileUpload()">
    
  </div>
  
              <button style="font-weight: bold" v-on:click="submitForm()">
                Upload
              </button>
</form>
</template>

    

<script>
import axios from 'axios';
import  {uuid} from 'vue-uuid';
// import axios from "axios";
export default {
  name: "CreateStory",

  data() {
    return {
      email: "",
      story: "",
     
    };
  },

  methods: {
  submitForm() {
      let formData = new FormData();
        formData.append("image", this.story);
       formData.append("email",localStorage.getItem("email"));
  
  axios
        .post("/story", formData, {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        })
       
          this.$router.push("/status");
        
        // .catch(function () {
        //   console.log("FAILURE!!");
        // });
      // if (response.data[0].status == 1) {
      //   alert("File upload successfully!");
      //   this.$router.push("/home3");
      // } else {
      //   alert("Failed!!");
      // }
    },
    onChangeFileUpload() {
      this.story = this.$refs.story.files[0];
    },
  },
};
</script>
