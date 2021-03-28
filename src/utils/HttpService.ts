import {HttpServiceRequest} from './HttpServiceRequest';
import ElementUI, { Message } from 'element-ui';
export class HttpService {

    public axios: any;
    public modal: any;
    public baseURL: String;

    constructor(parameters) {
        const serviceRequest = new HttpServiceRequest();
        this.axios = serviceRequest.getInstance();
        this.baseURL = serviceRequest.getBaseURL();
    }

    public getData(url: String, params?: object) {
        const body = {
            parameter: {
                data: params,
            },
        };
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                params: body,
            }).then((res) => {
                this.resultHandle(res, resolve);
            }).catch((err) => {
                reject(err.message);
            });
        });
    }

    public postData(url: String, data: Object, params?: object) {
        const body = {
            parameter: {
                data: params,
            },
        };
        return new Promise((resolve, reject) => {
            this.axios.post(url, data,{
                params: body,
            }).then((res) => {
                this.resultHandle(res, resolve);
            }).catch((err) => {
                reject(err.message);
            });
        });
    }

    public resultHandle(res: any, resolve) {
        if (res.status > 0) {
            resolve(res.data);
        } else {
            this.errorHandle(res);
        }
    }

    public errorHandle(res: any) {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000,
        });
    }

}