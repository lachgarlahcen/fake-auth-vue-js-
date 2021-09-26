<template>
    <div class="login-page">
      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div  class="card register" v-bind:class="{ error: error }">
                  <h1>Sign Up</h1>
                  <form class="form-group" @submit.prevent="doRegister">
                      <input v-model="name" type="text" class="form-control" placeholder="Name" required>
                      <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required>
                     <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="phone" type="phone" class="form-control" placeholder="Phone" required>
                     <input v-model="address" type="text" class="form-control" placeholder="Address" required>
                     <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="confirmPass" type="password" class="form-control" placeholder="Confirm Password" required>
                     <input type="submit" class="btn"/>
                     <p>Already have an account? <a href="#" @click="login">Sign in here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
   
    data(){
        return {
      email: "",
      password: "",
      name: "",
      lastName: "",
      phone: "",
      address: "",
      confirmPass: "",
      error: false
   }
    },
   computed:{
       validate(){
         return this.password === this.confirmPass;
      }
   },
   methods: {
      ...mapActions('auth',['register']),
       login(){
           this.$router.push('login')
       },
      doRegister() {
         if(this.validate){
            this.register({
            email: this.email,
            password: this.password,
            name: this.name,
            lastName: this.lastName,
            address: this.address,
            phone: this.phone
            });
         }
         else{
            this.error = true;
         }
      }
   }
   
}
</script>

<style lang="scss" scoped>
.btn{
    background-color: #273268;
    color: aliceblue;
}
p {
   line-height: 1rem;
}

.card {
   padding: 20px;
}

.form-group {
   input {
      margin-bottom: 20px;
   }
}

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;

   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   

   h1 {
      margin-bottom: 1.5rem;
   }
}

.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}


</style>