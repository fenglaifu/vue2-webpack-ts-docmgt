<template>
    <div class="app-container">
      <div class="btn-container">
            <router-link to="/doc/docupload">
              <el-button type="success" icon="el-icon-upload2">上传文档</el-button>
            </router-link>
      </div>

      <el-tree    
      :props="state.defaultProps"
      :data="dataTreeList"
      ref="tree"
      node-key="id"
      @node-click="handleNodeClick"
      >
    </el-tree> 
    </div>
</template>

<script lang="ts">
import { DocModelData } from './model/docModel';

const {state, getAllDataList} = DocModelData();

export default {
  name: "Doclist",
  data: () => {
    return {
      state,
      dataTreeList: [],
    };
  },
  watch: {
      dataTreeList: function(){
        console.log('watch dataTreeList');
        return this.$store.state.dirFileDataList;
      },
  },
   beforeCreate: async () => {
      console.log('beforeCreate');
  },
  async beforeMount() {
      let data = await getAllDataList(this);
      console.log('docModelData');
      console.log(data);
      console.log('this.$store.state.dirFileDataList');
      console.log(this.$store.state.dirFileDataList);
      this.$store.state.dirFileDataList = [];
      console.log(this.$store.state.dirFileDataList);
      this.$store.state.dirFileDataList = this.dataTreeList = data;
  },
  methods: {
      handleNodeClick(data:any, Node:any, element:any) {
          /* this.$router.push({ name: "docdetailPdf", params: { id:  1}}); */
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
          else if(suffix === 'doc' || suffix === 'docx'){
            this.$router.push({ name: "docdetailDocx", params: { id:  data.id}});
            return;
          }
          else if(suffix === 'pptx'){
            this.$router.push({ name: "docdetailPpt", params: { id:  data.id}});
            return;
          }
          else if(suffix === 'xls' || suffix === 'xlsx'){
            this.$router.push({ name: "docdetailXlsx", params: { id:  data.id}});
            return;
          }
          else if(suffix === 'txt'){
            this.$router.push({ name: "docdetailText", params: { id:  data.id}});
            return;
          }
          else {
            this.$router.push({ name: "docdetail", params: { id:  data.id}});
            return;
          }
        }
    },
  },

};
</script>

<style scoped>
  .app-container{
    font-size: 30px;
  }
  .btn-container {
    text-align: left;
    padding: 0px 10px 20px 0px;
}
</style>