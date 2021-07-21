const bulbLight={
    data(){
        return{
            isLighton:false
          
        }
    },
    methods:{
        on: function(){
            this.isLighton=!this.isLighton
            
        }
       
    }
}

Vue.createApp(bulbLight).mount("#demo");