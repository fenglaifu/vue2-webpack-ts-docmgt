<template>
    <div>
        <div class="btn-container">
            <el-button type="success" icon="el-icon-download" @click="downloadFile">下载</el-button>
            <div>文件名称: {{fileInfo.fileName}}</div>
        </div>
        <wordDocx :id="id"></wordDocx>
    </div>
</template>

<script>
import WordDocx from '../../../src/components/WordDocx.vue';
import { DocModelData } from './model/docModel';
const { getFileInfo, downloadFile } = DocModelData();

export default {
    name: 'docdetailDocx',
    components: {
        'wordDocx': WordDocx,
    },
    data() {
        return {
            fileInfo: {},
        };
    },
    props:{
 		id:{
 			type:[String,Number]
 		},
    },
    async created() {
        this.fileInfo = await getFileInfo(this.id);
    },
    methods: {
        downloadFile: function() {
            downloadFile(this.id);
        }
    },
}
</script>

<style scoped>
.btn-container {
  text-align: left;
  padding: 0px 10px 20px 0px;
}
</style>