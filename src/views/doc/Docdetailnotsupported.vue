<template>
    <div>
        <docdetailheader :id="id"></docdetailheader>
        <div class="div-container">暂不支持文件类型[{{suffix}}]的预览</div>
    </div>
</template>

<script>
import DocDetailHeader from './DocDetailHeader';
export default {
    name: 'docdetailnotsupported',
    components: {
        'docdetailheader': DocDetailHeader,
    },
    props:{
 		id:{
 			type:[String,Number]
        },
        suffix:{
 			type:[String]
 		},
    },
}
</script>
<style scoped>
  .div-container {
    text-align: center;
  }
</style>
