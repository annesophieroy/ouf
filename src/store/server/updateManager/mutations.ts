import { getDefaultState } from './index'
import Vue from 'vue'
import { MutationTree } from 'vuex'
import { ServerUpdateMangerState } from '@/store/server/updateManager/types'

export const mutations: MutationTree<ServerUpdateMangerState> = {
    reset(state) {
        Object.assign(state, getDefaultState())
    },

    setStatus(state, payload) {
        if ('version_info' in payload) {
            Object.entries(payload.version_info).forEach(([key, value]) => {
                Vue.set(state.version_info, key, value)
            })
        }

        if (!payload.busy) Vue.set(state.updateResponse, 'complete', true)
    },

    addUpdateResponse(state, payload) {
        if (state.updateResponse.application !== payload.application)
            Vue.set(state.updateResponse, 'application', payload.application)

        if (state.updateResponse.complete !== payload.complete)
            Vue.set(state.updateResponse, 'complete', payload.complete)

        if ('complete' in payload && payload.complete)
            Vue.$socket.emit('machine.update.status', { refresh: false }, { action: 'server/updateManager/getStatus'})

        state.updateResponse.messages.push({
            date: new Date(),
            message: payload.message
        })
    },

    resetUpdateResponse(state) {
        Vue.set(state, 'updateResponse', {
            application: '',
            complete: true,
            messages: []
        })
    }
}