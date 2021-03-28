<template>
    <div class="app-container">
      <div class="btn-container">
        <!-- 新增按钮 -->
        <router-link to="/worknotice/worknoticeAdd">
          <el-button type="success" icon="el-icon-edit">新增</el-button>
        </router-link>
      </div>
       <el-table
        v-loading="state.loading"
        :data="state.list"
        border
        fit="fit"
        stripe
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column align="center" label="标题" prop="title">
        </el-table-column>
        <el-table-column align="center" label="通知内容" prop="content">
        </el-table-column>
        <el-table-column align="center" label="日期" prop="createDate">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template v-slot="scope">
            <el-button
              type="primary"
              @click="handleView(scope)"
              >内容详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <pagination
        v-show="state.total > 0"
        :total="state.total"
        :page="state.listQuery.curPage"
        :limit="state.listQuery.pageSize"
        @pagination="getDataList"
      ></pagination>  
    </div>
</template>

<script lang="ts">
import Pagination from '../../../src/components/Pagination.vue';
import store from '../../store';
import { WorkNoticeModelData } from './model/worknoticeModel';
const {state, getDataList} = WorkNoticeModelData();

export default {
  name: "Worknoticelist",
  components: {
    'pagination': Pagination,
  },
  data: () => {
    return {
      state,
      fit: false,
    };
  },
  watch: {
    list: () => {
      return state.list;
    },
    loading: () => {
      return state.loading;
    },
  },
  mounted: async () => {
    const data = await getDataList();
    console.log(data);
    /* if(data){
      state.list
    } */
    console.log('getDataList');
  },
  updated: async () => {
    console.log('updated');
    console.log('updated');
  },
  methods: {
    getDataList: () => {

    },
    handleView({row}) {
      console.log('handleView');
      this.$router.push({
            name: "worknoticedetail",
            params: { id: row.id },
      });
    }
  },
};
</script>

<style scoped>
.btn-container {
  text-align: left;
  padding: 0px 10px 20px 0px;
}
</style>