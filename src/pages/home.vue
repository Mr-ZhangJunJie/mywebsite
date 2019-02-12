<template>
  <el-container id="container">
    <el-aside id="aside" width="200px">
      <el-menu :default-openeds="['1']" style="border-right:none;">
        <el-submenu :index="`${index+1}`" v-for="(listItem,index) in list" :key="index">
          <template slot="title"><i :class="listItem.iconName"></i>{{listItem.title}}</template>
          <el-menu-item :index="menu.indexM" v-for="(menu,index1) in listItem.item" :key="menu.indexM">
            <router-link :to="menu.link" style="display: block;width: 100%;height:100%;">{{menu.name}}</router-link>
          </el-menu-item>
          <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
  #container {
    max-width: 1200px;
    height:100%;
    margin:0 auto;
  }
  #aside{
    width:120px;
    box-sizing: border-box;
    overflow-x: hidden;
    border-right:1px solid #e6e6e6;
  }
</style>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        list:[{title:'活动',iconName:'el-icon-message',item:[{name:'运签',indexM:'1-1',link:'fortune'},{name:'剪纸',indexM:'1-2',link:'pagepc'}]},{title:'潮拍',iconName:'el-icon-menu',item:[]},
          {title:'ES6',iconName:'el-icon-setting',item:[]}]
      }
    },
    methods:{
    }
  };
</script>
