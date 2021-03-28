
import {HttpService} from '../../../utils/HttpService';

export function DocModelData() {

    const service = new HttpService();

    const baseURL = service.baseURL;

    const state = {
        loading: true, // 加载状态
        dataList: [], // 列表数据
        total: 0,
        listQuery: {
            curPage: 1,
            pageSize: 10,
        },
        dirFilePath: '',
        defaultProps: {
            label: "fileName",
            children: "children",
            isLeaf: 'leaf'
        }
    };

    const getAllDataList = (vueObj) => {
        state.loading = true;
        let url = '/docFile/getAllDirFile';
        return service.getData(url)
        .then(result => {
            console.log('getAllDataList()');
            console.log(result);
            state.dataList = result;
            vueObj.$store.state.dirFileDataList = result;
            vueObj.$store.commit('setDirFileDataList', result);
          return result;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
            state.loading = false;
        });
    }
    
    return {state, getAllDataList}
}