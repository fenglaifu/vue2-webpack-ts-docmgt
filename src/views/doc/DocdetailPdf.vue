<template>
    <div>
        
        <div class="btn-container">
            <el-button type="success" icon="el-icon-download" @click="downloadFile">下载</el-button>
            <div>文件名称: {{fileInfo.fileName}}</div>
        </div>
        <pdfComponent :id="id"></pdfComponent>
    </div>
</template>

<script>
import PdfComponent from '../../components/PdfComponent.vue';
import { DocModelData } from './model/docModel';
const { getFileInfo, downloadFile } = DocModelData();
export default {
    name: 'docdetailPdf',
    components: {
        'pdfComponent': PdfComponent
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