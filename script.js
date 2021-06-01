const app = Vue.createApp({
    data(){
        return {
            datas:[]
        }
    },
    created(){
        fetch('data.json')
        .then(res => res.json())
        .then(data=>{
            this.datas = data;
        })
    }
}).mount('#app');