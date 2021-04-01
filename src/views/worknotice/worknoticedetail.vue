
<template>
    <div class="app-container">
        <el-form :model="state.modelData">
            <el-form-item prop="title" label="标题">
                <el-input v-model="state.modelData.title" readonly></el-input>
            </el-form-item>
            <el-form-item prop="content" label="内容">
                <el-input type="textarea" :autosize="{ minRows: 10,maxRows: 10}" v-model="state.modelData.content" readonly></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="returnBack" type="primary">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { WorkNoticeModelData } from './model/worknoticeModel';

const {state, getDetail } = WorkNoticeModelData();
export default {
    name: 'worknoticedetail',
    data: () => {
        return {
            state,
        }
    },
    props:{
 		id:{
 			type:[String,Number]
 		},
    },
    async mounted() {
        console.log('getDetail');
        console.log(this.id);
        await getDetail(this.id);
    },
    watch: {
    },
    methods: {
        returnBack() {
            this.$router.push({name: "worknoticelist"});
        },
    },
}
</script>

<style scoped>

</style>