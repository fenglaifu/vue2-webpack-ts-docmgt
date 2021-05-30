import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isCollapse: false,
      sideBarWidth : '150px',
      sideBarWidthFolded: '14px',
      sideBarWidthExpand : '150px',
      sideBarArrow: 'el-icon-caret-left',
      sideBarArrowLeft: 'el-icon-caret-left',
      sideBarArrowRight: 'el-icon-caret-right',
      dirFileDataList: [],
      selectedFileData: {},
      dirTreeDatalist: [],
      defaultProps: {
        label: "fileName",
        children: "children",
        isLeaf: 'leaf'
      },
      loading: true, // 加载状态
      worknotice: {
        list: [], // 列表数据
        total: 0,
        listQuery: {
            curPage: 1,
            pageSize: 10,
        },
        modelData: {

        }
      },
      docFileData: {
        list: [], // 列表数据
        total: 0,
        test: 'te',
        listQuery: {
            curPage: 1,
            pageSize: 10,
        },
      },
  },
  mutations: {
    togleCollapse(state, step) {
      state.isCollapse = !state.isCollapse;
      if (state.isCollapse) {
        state.sideBarWidth = state.sideBarWidthFolded;
        state.sideBarArrow = state.sideBarArrowRight;
      }
      else {
        state.sideBarWidth = state.sideBarWidthExpand;
        state.sideBarArrow = state.sideBarArrowLeft;
      }
    },
    setWorkNoticeState(state, step){
      state.worknotice = Object.assign(state.worknotice, step);
    },
    setDocFileDataState(state, step){
      state.docFileData = Object.assign(state.docFileData, step);
    },
    setDirFileDataList(state, step) {
      state.dirFileDataList = step ? step : [];
    }
  },
  actions: {
  },
  modules: {
  },
});
