<template>
  <div class="game">
    <Loading :loading="loading"></Loading>
    <div class="top">

    </div>
    <div class="foot">
      <p class="timeText">{{timeStr}}</p>
      <div class="timeBox">
        <div class="time-now" :style="{width:timeWidth}"></div>
      </div>
      <div class="btns">
        <button v-if="!startStatus" @click="start">{{buttonText}}</button>
        <button v-if="startStatus" @click="stop">结束</button>
      </div>
      <button @click="show">显示弹窗</button>
      <van-button type="primary">主要按钮</van-button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      buttonText: "蓄力",
      timeWidth:0,
      startStatus: false,
      timeStr: '00.00',
      startTime:0,
      timer:null,
      loading:false,
      msg:'',
      num:0,
    }
  },
  methods: {
    start() {
      console.log('开始')    
      this.startStatus = true;
      this.startTime = new Date().getTime();
      this.cutDown()
    },
    show(){
      this.num++
      this.$toast('Upload Completed数字'+this.num)
    },
    cutDown(){
      let that = this;
      // this.timeStr = this.getTime();
      // this.$nextTick(function () {
      //   if(that.timeStr*1 >= 10){
      //     that.timeStr = "10.00";
      //     that.stop();
      //   }else{
      //     that.startTime && that.cutDown()
      //   }
      //   console.log(this.timeStr)
      // })
      this.timer = setInterval(()=>{
        this.timeStr = this.getTime();
        console.log(this.timeStr)
        if(that.timeStr*1 >= 19.99){
          clearInterval(this.timer)
          that.timeStr = "20.00";
          that.stop();
        }
      },10)
      
      
    },
    getTime: function () {
        var t = new Date().getTime() - this.startTime;
        return +(t = (t / 1e3).toFixed(2)) < 10 && (t = "0" + t), t;
    },
    stop(){
      console.log('结束')
      clearInterval(this.timer)
      this.startTime = null;
      this.startStatus = false;
    }
  }
}
</script>

<style scoped lang="less">
.game{
  .timeText{
    text-align: center;
  }
  .timeBox{
    width:100%;
    height: .5rem;
    background: aqua;
    .time-now{
      width:100%;
      height: 100%;
      background:limegreen;
    }
  }
  .btns{
    text-align: center;
  }
}
</style>
