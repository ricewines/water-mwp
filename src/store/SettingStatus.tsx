import {defineStore} from 'pinia'

export const settingPage = defineStore('settingPage', {
    state: () => {
        return {
            content: ''
        }
    },
    actions: {
        switchPage(content: string) {
            this.content = content;
        },
        getContent() {
            return this.content;
        }
    },
})
