import router from "../../router";

const state = () => ({
    token: null,
})

const getters = {
    loggedUser: state => state.user,
}

const mutations = {
    LOGIN(state, payload) {
        state.token = payload.token;
    },
    REGISTER(state, payload) {
        const user = state.users.find((user) => user.email === payload.email && user.password === payload.password);
        if (user) {
            router.app.$bvToast.toast('Compte existe déjà!', {
                title: 'Un problème est servenue',
                variant: 'danger',
                toaster: 'b-toaster-bottom-right',
                autoHideDelay: 3000,
                solid: true
            })
            return;
        }
        state.users.push(payload);
    },
    LOGOUT(state) {
        state.user = null;
    }
}

const actions = {
    login({commit}, params) {
        this._vm.$axios.post('http://localhost:3000/auth/login', params).then(res =>{
            commit("LOGIN", res);
        }).catch(err =>{
            console.log(err);
        });
        // router.push({name: 'home'});
    },
    register({ commit }, payload) {
        commit('REGISTER', payload);
        router.push({name: 'Login'});
    },
    logout({commit}) {
        commit('LOGOUT');
        router.push({name: 'Login'});
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}