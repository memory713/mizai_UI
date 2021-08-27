var MzButton = {
  name: 'MzButton',
  data: function () {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">click me {{count}}<button>'
};

MzButton.install = app => app.component("MzButton", MzButton); //组件库


const MzElement = {
  MzButton,
  install: app => {
    app.use(MzButton);
  }
};

export { MzElement as default };
