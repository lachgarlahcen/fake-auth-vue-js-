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
      <b-col cols="12">
        <span><strong>Phone: </strong></span>
        <b-badge variant="success">{{phone}}</b-badge>
      </b-col>
      <b-col>
     <b-col cols="12">
          <hr />
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
    }
  },
  methods: {
    ...mapActions("auth", ["getUser"]),
  },
};
</script>
