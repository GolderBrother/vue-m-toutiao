import Alert from '@/components/Dialog/index.js';
import CircleLoading from '@/components/CircleLoading/index.vue'
import DefaultLoading from '@/components/DefaultLoading/index.vue'
import FullCircleLoading from '@/components/CircleLoading/full-loading.vue'
import Github from '@/components/Github'
import HeadBar from '@/components/HeadBar'
import IconSvg from '@/components/IconSvg'
import Login from '@/components/Login'
import NoneData from '@/components/NoneData'
import NoneDataTwo from '@/components/NoneData/indexTwo'
import SwitchCheck from '@/components/Switch'

import { showLoading,hideLoading } from '@/components/DefaultLoading/index.js'
import { showCircleLoading,hideCircleLoading } from '@/components/CircleLoading/full-loading.js'

// const componentArr = [
//     Alert,CircleLoading,FullCircleLoading,DefaultLoading,Github,HeadBar,Icon,Login,NoneData,NoneDataTwo,Switch,TopBarBox
// ]

const customizedComponent = Vue => {
    Vue.component('Alert',Alert);
    Vue.component('CircleLoading',CircleLoading);
    Vue.component('DefaultLoading',DefaultLoading)
    Vue.component('FullCircleLoading',FullCircleLoading);
    Vue.component('Github',Github);
    Vue.component('HeadBar',HeadBar);
    Vue.component('IconSvg',IconSvg)
    Vue.component('Login',Login);
    Vue.component('NoneData',NoneData);
    Vue.component('NoneDataTwo',NoneDataTwo);
    Vue.component('SwitchCheck',SwitchCheck);

    Vue.prototype.$alert = Alert;
    Vue.prototype.$showLoading = showLoading;
    Vue.prototype.$hideLoading = hideLoading;
    Vue.prototype.$showCircleLoading = showCircleLoading;
    Vue.prototype.$hideCircleLoading = hideCircleLoading;
}

export default customizedComponent