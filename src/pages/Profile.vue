<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <center>
          <b-avatar
            variant="info"
            size="200"
            src="https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png"
          ></b-avatar>
          <h3 class="media-heading">{{ name }}</h3>
        </center>
      </b-col>
      <b-col  cols="4">
        <span><strong>Email: </strong></span>
        <b-badge variant="success">{{email}}</b-badge>
      </b-col>
      <b-col  cols="4">
        <span><strong>Phone: </strong></span>
        <b-badge variant="success">{{phone}}</b-badge>
      </b-col>
      <b-col  cols="4">
        <span><strong>Address: </strong></span>
        <b-badge variant="info">{{address}}</b-badge>
      </b-col>
      <hr />
     <b-col cols="12">
          <p class="m-0 user-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    this.getUser();
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    name() {
      return this.user ? `${this.user.name} ${this.user.lastName}` : "";
    },
    phone(){
        return  this.user ? this.user.phone : "";
    },
    address(){
        return  this.user ? this.user.address : "";
    },
    email(){
        return  this.user ? this.user.email : "";
    }
  },
  methods: {
    ...mapActions("auth", ["getUser"]),
  },
};
</script>
<style lang="scss" scoped>
.user-bio{
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #2c3e50;
}
</style>
