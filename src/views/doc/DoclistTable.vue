<template>
    <div class="container-doc">
      <div class="btn-container">
            <router-link to="/doc/docupload">
              <el-button type="success" icon="el-icon-upload2">上传文档</el-button>
            </router-link>
      </div>
       <el-table
        v-loading="state.loading"
        :data="$store.state.docFileData.list"
        border
        fit="fit"
        stripe
        highlight-current-row
        class="table-wrapper"
        style="width: 100%"
        :row-style="{ height: '10px' }"
        @row-dblclick="handleDbClick"
      >
        <el-table-column align="left" header-align="center" label="文件名" prop="fileName" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="left" header-align="center" label="当前目录" prop="filePath" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" label="上传日期" prop="createDate" show-overflow-tooltip min-width="100px">
        </el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template v-slot="scope">
            <el-button type="primary" @click="deleteRow(scope)" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <pagination
        v-show="$store.state.docFileData.total > 0"
        :total="$store.state.docFileData.total"
        :page="$store.state.docFileData.listQuery.curPage"
        :limit="$store.state.docFileData.listQuery.pageSize"
        @pagination="getPageData">
      </pagination>  
    </div>

</template>

<script lang="ts">
import { Message } from 'element-ui';
import Pagination from '../../../src/components/Pagination.vue';
import { DocModelData } from './model/docModel';
const {state, getPaginationDataList, deleteFile} = DocModelData();

export default {
  name: "DoclistTable",
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
    const data = await getPaginationDataList();
  },
  methods: {
    getPageData({page, limit}) {
      this.$store.commit('setDocFileDataState', {listQuery: {curPage: page, pageSize: limit}});
      getPaginationDataList();
    },
    handleDbClick(data, event){
      if(data.isDir){
        return;
      }
      this.$store.state.selectedFileData = data;
      if(data.fileName){
        const suffix = data.fileName.substring(data.fileName.lastIndexOf('.') + 1).toLowerCase();
        if(suffix === 'pdf'){
          this.$router.push({ name: "docdetailPdf", params: { id:  data.id}});
          return;
        }
        else if(suffix === 'docx'){
          this.$router.push({ name: "docdetailDocx", params: { id:  data.id}});
          return;
        }
        /* else if(suffix === 'pptx'){
          this.$router.push({ name: "docdetailPpt", params: { id:  data.id}});
          return;
        } */
        else if(suffix === 'xlsx'){
          this.$router.push({ name: "docdetailXlsx", params: { id:  data.id}});
          return;
        }
        else if(suffix === 'txt'){
          this.$router.push({ name: "docdetailText", params: { id:  data.id}});
          return;
        }
        else {
          this.$router.push({ name: "docdetailnotsupported", params: { id:  data.id, suffix: suffix}});
          return;
        }
      }
    },
    deleteRow({row}) {
      this.$confirm('是否删除该文件?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteFile(row.id).then(result => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          });
          
        }).catch(() => {          
        });
      
    },
  },

};
</script>

<style scoped>
  .btn-container {
    text-align: left;
    padding: 0px 10px 10px 0px;
  }
  .table-wrapper {
    height: calc(100vh - 220px);
    overflow: auto;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>