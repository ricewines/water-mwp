import {defineStore} from 'pinia'

export const consumerPage = defineStore('consumerPageStatus', {
    state: () => {
        return {
            content: '首页'
        }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
        switchPage(content: string) {
            this.content = content;
        },
        getContent() {
            return this.content;
        }
    },
})
