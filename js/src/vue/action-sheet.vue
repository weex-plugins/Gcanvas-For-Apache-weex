<template>
  <div class="as-container">
    <div class="as-dialog">
      <div class="as-hd">
        <div class="as-title">{{title}}</div>
        <div class="as-message">{{message}}</div>
      </div>
      <div class="as-btn" v-for="(item, index) in items" :class="{'as-btn-last':index == items.length - 1}" @click="ok(index)">
        <text class="as-btn-text" :class="{'as-text-warn':item.type==2}">{{item.message}}</text>
      </div>
      <div v-if="hasCancel" class="as-btn as-cancel" @click="cancel">
        <text class="as-btn-text">取消</text>
      </div>
    </div>      
  </div>
</template>
<style>
  .as-container{
    flex:1;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);  
  }
  .as-dialog{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    padding: 20px;
    
  }
  .as-hd{
    padding: 20px 0;
    background-color: #fff;
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .as-title{
    font-size: 26px;
    margin-bottom: 15px;
  }
  .as-message{
    font-size: 24px;
  }
  .as-btn{
    font-size: 30px;
    padding: 30px 0;
    background-color: #fff;
    border-top: 1px solid #ddd;
    
  }
  .as-btn-text{
    flex:1;
    text-align: center;
    color: #1ba1e2;
  }
  .as-btn-last{
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .as-text-warn{
    color: red;
  }
  .as-cancel{
    margin-top: 30px;
    border-radius: 15px;
  }
</style>
<script>
  module.exports = {
    data() {
      return {
        message: 'your message',
        title: 'title'
      };
    },
    methods: {
      cancel() {
        const el = document.querySelector('.as-container');  
        if(el) {
          el.remove();  
        }
      },
      ok(index) {
        this.callback({
          result: 'success',
          data: {
            message: this.message,
            index: index
          }
        });
        this.cancel();
      }
    }
  };
</script>