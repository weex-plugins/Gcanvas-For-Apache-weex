<template>
  <list>
    <cell>
      <div>
        <bubble :positions="positions" rows=2 :nails="nails" style="width:750px; height: 1000px;background-color:#cccccc">
          <div v-for="(bubble,index) in bubbles" v-if="bubble" :key="index" class="bubble">
            <div class="text-wrap"><text class="test-text">{{index}}</text></div>
          </div>
        </bubble>
        </div>
    </cell>
    <cell>
      <div class="holder"></div>
    </cell>
  </list>
</template>
<style scoped>
.holder {
  height: 1000px;
  background-color: #000000;
}
.title {
  font-size: 30px;
}
.bubble {
  position: relative;
  background-color: #000000;
}
.text-wrap{
  position: absolute;
  left: 40px;
  top: 40px;
  /* justify-content: center; */
  /* align-items: center; */
}
.test-text{
  font-size: 40px;
  color: #f00000;
}
</style>
<script>
    // 如果你想使用vue render function, 用createElement来创建节点, render函数中的style请预先使用这个函数做处理
    // https://cn.vuejs.org/v2/guide/render-function.html#main 
    // function processStyle(style){
    //     if(weex.utils && weex.utils.autoPrefix && weex.utils.normalizeStyle){
    //         return weex.utils.autoPrefix(weex.utils.normalizeStyle(style));
    //     }
    //     else{
    //         return style;
    //     }
    // }

    export default {
        isVue: true,
        data() {
            return {
              positions: [
                [36, 40, 154, 164],
                [-38, 216, 250, 266],
                [210, 20, 250, 266],
                [228, 302, 154, 164],
                [476, 58, 200, 214],
                [398, 286, 200, 214],
                [692, 86, 154, 164],
                [614, 266, 200, 214]
              ],
              nails: [
                [
                  [-160, 40, 154, 164],
                  [-208, 216, 154, 164]
                ],
                [
                  [862, 86, 154, 164],
                  [830, 266, 154, 164]
                ]
              ],
              bubbles: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
            }
        },
        mounted() {
           
        }
    }

</script>