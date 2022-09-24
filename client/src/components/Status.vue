<template>
  <div style="background-color: #4267B2">


    
    <div style="display:inline-block;padding:5px;">
      <button class="btn1">
        <router-link to="/AddStatus" class="nav-link fa-1x" id="button">
          Add Status
        </router-link>
      </button>
      <button class="btn1">
        <router-link to="/Addstory" class="nav-link fa-1x" id="button">
          Add picture
        </router-link>
      </button>
      <button @click="() => { logout(); }">Logout</button>
    </div>
    <!-- <Profile v-bind:info="info"> </Profile> -->

    <h1>Story list</h1>
    <br />
    <br />
    <div style="height:100%;width:100%">
    <div class="container">
     <div class="c">
      <div class="row row-cols-1 row-cols-lg-1 row-cols-xl-3 ms-1" style="display:inline-flex; flex: wrap;  width: 100%;">
        <div class="col-lg-1" style="margin-right: 5%; overflow-x: hidden;"  v-for="infe in info1" :key="infe.id">
       
          <div class="card radius-15">
            <div class="card-body text-center">
              <div class=" border radius-15">

          
                <h5 class="mb-0 mt-5"> {{ infe.email }}</h5>
                
                <img :src= "'http://127.0.0.1:9000/class/'+ infe.name ">
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
    <h1>Status list</h1>
    <br />
    <br />
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4" >
        <div class="col" v-for="inf in info" :key="inf.id">
          <div class="card radius-15">
            <div class="card-body text-center">
              <div class="p-4 border radius-15">


                <h5 class="mb-0 mt-5">Email: {{ inf.email }}</h5>
                <p class="mb-3">Status: {{ inf.status }}</p>
                <div class="list-inline contacts-social mt-3 mb-3">
                  <a href="javascript:;" class="list-inline-item bg-facebook text-white border-0"><i
                      class="bx bxl-facebook"></i></a>
                  <a href="javascript:;" class="list-inline-item bg-twitter text-white border-0"><i
                      class="bx bxl-twitter"></i></a>
                  <a href="javascript:;" class="list-inline-item bg-linkedin text-white border-0"><i
                      class="bx bxl-linkedin"></i></a>
                </div>





              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";



export default {
  name: "StatusList",


  data() {
    return {
      info: "",
      email: "",
      info1: ""
    };
  },
  mounted() {
    this.fetchInfo1();
    this.fetchInfo();
  },

  methods: {
    fetchInfo() {
      // console.log(localStorage.getItem("email"));
       this.email = localStorage.getItem("email");
        axios.get("http://10.100.104.13:100/status/" + this.email).then((res) => (this.info = res.data));
    
      }


    ,

    fetchInfo1(){
    
        this.email = localStorage.getItem("email");
      
        axios.get("/story/" + this.email).then((res) => (this.info1 = res.data));
      

    },
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }

  },
};
</script>

<style scoped>
body {
  background-color: #f7f7ff;
  margin-top: 20px;
}

.radius-15 {
  border-radius: 15px;
  /* width: 100px;
  height: 200px; */
}
.radius-10 {
  border-radius: 15px;
  width: 40px;
  height: 40px;
}
.c{
  margin-right: 10px ;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgba(8, 8, 8, 0.65),
    0 2px 6px 0 rgba(19, 81, 114, 0.54);
}

.styler{
  height: 100px;
  width: 100px;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.contacts-social a {
  font-size: 16px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background: #ffffff;
  border: 1px solid #eeecec;
  text-align: center;
  border-radius: 50%;
  color: #2b2a2a;
}

.bg-facebook {
  background-color: #3b5998 !important;
}

.bg-twitter {
  background-color: #55acee !important;
}

.bg-linkedin {
  background-color: #0976b4 !important;
}

.container {
  padding-top: 50px;
  padding-right: 10px;
  padding-left: 10px;
}

#button {
  padding-left: 10px;
  font: bold;
}

.buttondis {
  width: 100%;
  text-align: center;
}

.inner {
  display: inline-block;
}

.btn1 {
  margin-right: 20px;
}
</style>
