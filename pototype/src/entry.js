import MzButton from "./MzButton";
//添加插件
MzButton.install = app => app.component("MzButton", MzButton);

//组件库
const MzElement = {
    MzButton,
    install: app => {
        app.use(MzButton)
    }
}

export default MzElement;