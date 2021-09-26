import router from "@/router";

const state = () => ({
    token:  localStorage.getItem('user-token') || null,
    user: null,
})

const getters = {
    user: state => state.user,
    token: state => state.token,
}

const mutations = {
    SET_USER(state, user){
        state.user = user;
    },
    LOGIN(state, token) {
        state.token = token;
        localStorage.setItem('user-token', token);
    },
    REGISTER(state, payload) {
        state.user = payload;
    },
    LOGOUT(state) {
        state.user = null;
        state.token = null;
        localStorage.removeItem('user-token');
    }
}

const actions = {
    login({commit}, params) {
        this._vm.$axios.post('http://localhost:3000/auth/login', params).then(res =>{
            commit("LOGIN", res.data.token);
            router.push({name: 'home'});
        }).catch(err =>{
            console.log(err);
        });
        
    },
    register({commit},params) {
        this._vm.$axios.post('http://localhost:3000/auth/register', params).then(res =>{
            commit("REGISTER", params);
            this._vm.$bvToast.toast(res.data.mssg, {
                variant: 'success',
                toaster: 'b-toaster-bottom-right',
                autoHideDelay: 3000,
                solid: true
            })
            router.push({name: 'login'});
        }).catch(err =>{
            this._vm.$bvToast.toast(err.response.data.mssg, {
                variant: 'danger',
                toaster: 'b-toaster-bottom-right',
                autoHideDelay: 3000,
                solid: true
            })
        });
    },
    getUser({commit}) {
        this._vm.$axios.get('http://localhost:3000/me').then(res =>{
            commit("SET_USER", res.data);
        }).catch(err =>{
            console.log(err);
        });
        
    },
    logout({commit}) {
        commit("LOGOUT");
        router.push({name: 'login'});
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}