<template>
  <b-navbar class="digi-nav" toggleable="lg" type="dark" >
                    <b-navbar-brand href="https://digitalent-consulting.com">
                        <img class="nav-logo" src="https://digitalent-consulting.com/wp-content/uploads/2018/11/robot-v8-Personnalisé-500x218.png">
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                    <b-collapse is-nav id="nav_collapse">
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item-dropdown right>
                                <template slot="button-content"><em>User</em></template>
                                <b-dropdown-item @click="profile">Profile</b-dropdown-item>
                                <b-dropdown-item @click="signout">Signout</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: 'navBar',
    methods:{
        ...mapActions('auth',['logout']),
        signout(){
            this.logout();
        },
        profile(){
            this.$router.push({name: 'profile'})
        }
    }
}
</script>

<style lang="scss" scoped>

.digi-nav{
    background-color: rgb(232, 86, 19);
    font-size: 18px;
    font-weight: 400;
.nav-logo{
    height: 50px;
}
}

</style>