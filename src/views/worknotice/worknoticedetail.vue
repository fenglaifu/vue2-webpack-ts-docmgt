
<template>
    <div class="container-detail">
        <div class="btn-container">
            <router-link to="/worknotice">
                <el-button type="primary">返回</el-button>
            </router-link>
        </div>
        <el-form :model="state.modelData">
            <el-form-item prop="title" label="标题">
                <el-input v-model="state.modelData.title" readonly></el-input>
            </el-form-item>
            <el-form-item prop="title" label="内容"><br/>
                <div class="content-line" v-html="contentHtml"></div>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
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
        await getDetail(this.id);
    },
    computed: {
        contentHtml: function(){
            return state.modelData.content ? state.modelData.content.replace(/\n/g, '<br>'): '';
        }
    },
}
</script>

<style scoped>
.content-line{
    line-height: 1.8rem !important;
}
</style>