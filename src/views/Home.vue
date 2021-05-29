<template>
    <div class="app-wrapper">
        <el-row  :gutter="20"  class="el-row home" type="flex">
            <el-col :span="8">
                <router-link to="/worknotice/worknoticelist">
                    <el-card shadow="always">工作通知</el-card>
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/doc/doclist">
                    <el-card shadow="always">文档</el-card>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { Vue } from 'vue-property-decorator';
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
@import '../assets/styles/index.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.home {
    margin-top: 20px;
    height: 100%;
    width: 100%;
}
</style>