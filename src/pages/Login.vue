<template>
    <div class="login-page">
      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div  class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Sign In</h1>
                  <form class="form-group">
                     <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn " @click.prevent="doLogin">
                     <p>Don't have an account? <a href="#" @click="register">Sign up here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    data(){
        return {
      email: "",
      password: "",
      emptyFields: false
   }
    },
   
   methods: {
      ...mapActions('auth', ["login"]),
      doLogin() {
       this.login({email:this.email, password:this.password});
      },
      
      register() {
          this.$router.push('register')
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