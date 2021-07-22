<template>
  <div class="list-card">
    <div class="select-bar flex-box">
      <span class="icon" :class="{'active':active===index}" v-for="(item, index) in list" :key="index" @click="changeStyle(index)">
        <svg-icon :icon-class="item.icon" />  
      </span>   
    </div>
    <div class="list-box flex-box" :class="{'is-list':active===1}">
      <div class="list-item" v-for="(item,index) in listData" :key="index">
        <img :src="require('@/assets/images/'+item.img+'')" :alt="item.title">
        <div class="list-con">
          <h6>{{item.title}}</h6>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
  export default {
    name:'ListCard',
    setup(){
      const active = ref(0)
      const list = [
        {
          icon:'card'
        },
        {
          icon:'list'
        }
      ]
      const listData = [
        {
          img:'hoverEffect/1.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/2.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/3.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/4.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/5.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/6.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/7.jpg',
          title:'title',
          content:'content'
        },        
        {
          img:'hoverEffect/8.jpg',
          title:'title',
          content:'content'
        }
      ]

      const changeStyle = (index) => {
        active.value = index
      }
      return {
        active,
        list,
        listData,
        changeStyle,
      }
    }
  }
</script>

<style lang="scss" scoped>
.list-card{
  .select-bar{
    font-size: 24px;
    justify-content: flex-end;

    .icon{
      background-color: #e1e1e1;
      padding: 4px;
      cursor: pointer;

      &.active{
        background-color: #fefefe;
      }

      &:first-child{
        border-radius: 5px 0 0 5px;
      }

      &:last-child{
        border-radius: 0 5px 5px 0;
      }
    }
  }

  .list-box{
    padding: 20px 0;
    justify-content: space-between;
    flex-wrap: wrap;

    .list-item{
      width: 24%;
      border: 1px solid #e2e2e2;
      background-color: #fff;
      margin-bottom: 1.33%;
      position: relative;

      img{
        width: 100%;
      }

      .list-con{
        padding: 20px;

        h6{
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }

    &.is-list{
      .list-item{
        width: 100%;
        border-width: 0 0 1px 0;
        padding-left: 200px;
        height: 200px;

        img{
          width: 200px;
          position: absolute;
          left: 0;
        }
      }
    }
  }
}
</style>