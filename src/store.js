import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            person: {
                personal: "",
                children: [],
            },
        };
    },
    mutations: {
        setPersonalData(state, data) {
            state.person = { ...data.value };
        },
    },
    getters: {
        getPerson(state) {
            return state.person;
        },
    },
});

export default store;
