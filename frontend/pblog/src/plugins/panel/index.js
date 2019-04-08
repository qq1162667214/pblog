import PanelComponent from './Panel.vue';

const Panel = {
  install(Vue) {
    Vue.component(PanelComponent.name, PanelComponent)
  }
}

export default Panel;