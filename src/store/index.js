import { createStore } from 'vuex';

export default createStore({
  state: {
    isToast: false,
    onLoad: false,
    msg: 'This is Toast',
    toastType: 'success',
    componentKey: 0,
    isPageChanged: false,
    dataInCard: null,
    currentDynamicComponent: 'brands',
  },
  mutations: {
    show(state, payload) {
      state.onLoad = true;
      state.isToast = true;
      state.msg = payload.msg;
      state.toastType = payload.toastType;
    },
    hide(state) {
      state.isToast = false;
    },
    increment(state) {
      state.componentKey += 1;
    },
    setIsPageChanged(state, value) {
      state.isPageChanged = value;
    },
    setDataInCard(state, payload) {
      state.dataInCard = payload;
    },
    setCurrentDynamicComponent(state, brand) {
      state.currentDynamicComponent = brand;
    },
  },
  actions: {
    showToast(context, payload) {
      context.commit({
        type: 'show',
        msg: payload.msg,
        toastType: payload.toastType,
      });
      setTimeout(() => {
        context.commit('hide');
      }, 2000);
    },
    changePage(context, value) {
      context.commit('setIsPageChanged', value);
    },
    insertDataForEdit(context, payload) {
      context.commit('setDataInCard', payload);
    },
    changeDynamicComponent(context, value) {
      context.commit('setCurrentDynamicComponent', value);
    },
  },
  modules: {},
});
