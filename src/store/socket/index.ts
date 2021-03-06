import { Module } from 'vuex'
import { SocketState } from '@/store/socket/types'
import { actions } from '@/store/socket/actions'
import { mutations } from '@/store/socket/mutations'
import { getters } from '@/store/socket/getters'
import {RootState} from '@/store/types'

export const getDefaultState = (): SocketState => {
    return {
        remoteMode: process.env.VUE_APP_REMOTE_MODE?.toLowerCase() === 'true' || (document.location.hostname === 'my.mainsail.xyz'),
        hostname: process.env.VUE_APP_HOSTNAME || (process.env.VUE_APP_REMOTE_MODE?.toLowerCase() === 'true' || document.location.hostname === 'my.mainsail.xyz' ? '' : window.location.hostname),
        port: process.env.VUE_APP_PORT || (process.env.VUE_APP_REMOTE_MODE?.toLowerCase() === 'true' || document.location.hostname === 'my.mainsail.xyz' ? 7125 : window.location.port),
        protocol: document.location.protocol === 'https:' ? 'wss' : 'ws',
        reconnectInterval: process.env.VUE_APP_RECONNECT_INTERVAL || 2000,
        isConnected: false,
        isConnecting: false,
        connectingFailed: false,
        loadings: []
    }
}

// initial state
const state = getDefaultState()

export const socket: Module<SocketState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}