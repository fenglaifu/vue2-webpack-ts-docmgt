<template>
    <div class="app-container">
        上传目录:
    </div>
</template>
<script lang="ts">
export default {
    name: 'Docupload',
    beforeCreate: () => {
        console.log('Docupload beforeCreate');
    }
}
    
</script>


<style scoped>
.btn-container {
  text-align: left;
  padding: 0px 10px 20px 0px;
}
.el-row{
    margin-top: 20px;
}
.dir-div{
    width:  100%;
    display: flex;
    align-items: center;
}
.dir-label{
    width:  100px;
}
</style>