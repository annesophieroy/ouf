import Dashboard from '../pages/Dashboard.vue'
import Webcam from '../pages/Webcam.vue'
import Farm from '../pages/Farm.vue'
import Console from '../pages/Console.vue'
import Heightmap from '../pages/Heightmap.vue'
import Files from '../pages/Files.vue'
import History from '../pages/History.vue'
import Timelapse from '../pages/Timelapse.vue'
import Machine from '../pages/Machine.vue'
import {Component} from 'vue'
import Viewer from '../pages/Viewer.vue'
import Display from '../pages/Display.vue'
import Control from '../pages/Control.vue'
import Maintenance from '../pages/Maintenance.vue'


const routes: AppRoute[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon: 'monitor-dashboard',
        component: Dashboard,
        alwaysShow: true,
        showInNavi: true,
    },
    {
        title: 'Printers',
        path: '/allPrinters',
        component: Farm,
        alwaysShow: false,
        showInNavi: false,
    },
    {
        title: 'Display',
        path: '/display',
        icon: 'book-open',
        component: Display,
        alwaysShow: true,
        showInNavi: true,
    },
    {
        title: 'Control',
        path: '/control',
        icon: 'gamepad-square',
        component: Control,
        alwaysShow: true,
        showInNavi: true,
    },
    {
        title: 'Maintenance',
        path: '/maintenance',
        icon: 'toolbox',
        component: Maintenance,
        alwaysShow: true,
        showInNavi: true,
    },
    {
        title: 'Webcam',
        path: '/cam',
        icon: 'webcam',
        component: Webcam,
        alwaysShow: true,
        showInNavi: true,
    },
    {
        title: 'Console',
        path: '/console',
        icon: 'console-line',
        component: Console,
        alwaysShow: true,
        showInNavi: true,
        klipperIsConnected: true
    },
    {
        title: 'Heightmap',
        path: '/heightmap',
        icon: 'grid',
        component: Heightmap,
        alwaysShow: false,
        showInNavi: true,
        klipperComponent: 'bed_mesh',
    },
    {
        title: 'G-Code Files',
        path: '/files',
        icon: 'file-document-multiple-outline',
        component: Files,
        alwaysShow: true,
        showInNavi: true,
        registeredDirectory: 'gcodes',
    },
    {
        title: 'G-Code Viewer',
        path: '/viewer',
        icon: 'video-3d',
        component: Viewer,
        alwaysShow: false,
        showInNavi: true,
    },
    {
        title: 'History',
        path: '/history',
        icon: 'history',
        component: History,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'history'
    },
    {
        title: 'Timelapse',
        path: '/timelapse',
        icon: 'timelapse',
        component: Timelapse,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'timelapse'
    },
    {
        title: 'Machine',
        path: '/config',
        icon: 'wrench',
        component: Machine,
        alwaysShow: true,
        showInNavi: true,
    },
    {
        title: null,
        component: null,
        alwaysShow: false,
        showInNavi: false,
        path: '/settings/machine',
        redirect: '/config'
    }
]

export default routes

export interface AppRoute {
    title: string | null,
    path: string,
    redirect?: string,
    icon?: string,
    component: Component | null,
    alwaysShow: boolean,
    showInNavi: boolean,
    registeredDirectory?: string,
    moonrakerComponent?: string,
    klipperComponent?: string,
    klipperIsConnected?: boolean,
    children?: AppRoute[]
}
