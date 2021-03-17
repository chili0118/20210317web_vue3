const clock = {
    data() {
        return {
            h: 24,
            m: 60,
            s: 60
        }
    },methods: {
        // 更新時鐘
        updateClock () {
            var date = new Date();
            // console.log(date);m,  
            this.h = date.getHours();
            this.m = date.getMinutes();
            this.s = date.getSeconds();
        }
    },
    mounted() {
        setInterval(this.updateClock, 1000);
    }
};

Vue.createApp(clock).mount("#clock");