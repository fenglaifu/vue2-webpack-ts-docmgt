/* import {store} from '../../../store'; */
import {HttpService} from '../../../utils/HttpService';
export function WorkNoticeModelData() {

    let state = {
        loading: true, // 加载状态
        list: [], // 列表数据
        total: 0,
        listQuery: {
            curPage: 1,
            pageSize: 10,
        },
        modelData: {},
    };

    const service = new HttpService();

    const getDataList = () => {
        state.loading = true;
        console.log('store');
        let url = `/workNotice/${state.listQuery.curPage}/${state.listQuery.pageSize}`;
        /* let url = '/workNotice/1/10'; */
        return service.getData(url)
        .then(result => {
          console.log(result);
          state.list = result.list;
          state.total = result.total;
          return result;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
            state.loading = false;
        });
    }

    const saveNotice = (notice) => {
        state.loading = true;
        let url = `/workNotice`;
        return service.postData(url, notice)
                .then(response => {
                    console.log(response);
                })
                .finally(() => {
                    state.loading = false;
                });
    }

    const getDetail = (id) => {
        state.loading = true;
        let url = `/workNotice/${id}`;
        return service.getData(url)
                        .then(data => {
                            console.log(data);
                            state.modelData = data;
                        })
                        .finally(() => {
                            state.loading = false;
                        });
    }

    return { state, getDataList, saveNotice, getDetail }
}