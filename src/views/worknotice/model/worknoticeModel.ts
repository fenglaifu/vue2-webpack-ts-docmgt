/* import {store} from '../../../store'; */
import {HttpService} from '../../../utils/HttpService';
import store from '../../../store'
export function WorkNoticeModelData() {

    let state = {
        loading: true, // 加载状态
        modelData: {},
    };

    const service = new HttpService(null);

    const getDataList = () => {
        state.loading = true;
        let url = `/workNotice/${store.state.worknotice.listQuery.curPage}/${store.state.worknotice.listQuery.pageSize}`;
        return service.getData(url)
        .then((result:any) => {
          store.state.worknotice.list = result.list;
          store.state.worknotice.total = result.total;
          return result;
        })
        .catch(error => {
          console.log(error);
          service.showErrorMsg(undefined);
        })
        .finally(() => {
            state.loading = false;
        });
    }

    const saveNotice = (notice:AnalyserNode) => {
        state.loading = true;
        let url = `/workNotice`;
        return service.postData(url, notice)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    service.showErrorMsg(undefined);
                })
                .finally(() => {
                    state.loading = false;
                });
    }

    const getDetail = (id:number) => {
        state.loading = true;
        let url = `/workNotice/${id}`;
        return service.getData(url)
                        .then((data:any) => {
                            state.modelData = data;
                        })
                        .catch(error => {
                            console.log(error);
                            service.showErrorMsg(undefined);
                        })
                        .finally(() => {
                            state.loading = false;
                        });
    }

    const deleteData = (id:number) => {
        state.loading = true;
        let url = `/workNotice/${id}`;
        return service.deleteData(url)
                        .then((data:any) => {
                            getDataList();
                            return data;
                        })
                        .catch(error => {
                            console.log(error);
                            service.showErrorMsg(undefined);
                        })
                        .finally(() => {
                            state.loading = false;
                        });
    }

    return { state, getDataList, saveNotice, getDetail, deleteData }
}