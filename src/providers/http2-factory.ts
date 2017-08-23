import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class Http2Factory {
    constructor(
        public Http: Http
    ) {

    }
    create(url: string) {
        return new Http2(this.Http, url);
    }
}

export class Http2 {
    private rootUrl: string;
    constructor(
        private Http: Http,
        rootUrl: string = null,
    ) {
        if (rootUrl && rootUrl.lastIndexOf("/") !== rootUrl.length - 1) {
            rootUrl = rootUrl + "/";
        }
        this.rootUrl = rootUrl;
    }

    /**
     * Perform any request type
     */
    private request<T>(url: string, config: any): Promise<T> {
        var requestConfig: RequestOptions = Object.assign({}, config, {
            search: this.getParams(config.params),
            method: config.method
        });

        url = this.rootUrl ? this.rootUrl + url : url;
        //remove any trailing slash from the url
        if (url.lastIndexOf('/') === url.length - 1) {
            url = url.substring(0, url.length - 1);
        }

        return this.Http.request(url, requestConfig).toPromise().then((response: Response) => {
            if (response.text()) {
                return response.json();
            }
        }, (response: Response) => {
            if (response.text()) {
                return Promise.reject(response.json());
            }
        });
    }

    /**
     * Get a URLSearchParams object based off of a javscript object
     */
    private getParams(params: any) {
        var result = new URLSearchParams();
        for (var i in params) {
            result.set(i, params[i]);
        }
        return result;
    }

    public get<T>(url: string, params?: any, config?: any): Promise<T> {
        var cfg = Object.assign({}, config, {
            method: 'GET',
            params: params
        });

        return this.request<T>(url, cfg);
    }

    public post<T>(url: string, body?: any, config?: any): Promise<T> {
        var cfg = Object.assign({}, config, {
            method: 'POST',
            body: body
        });
        return this.request<T>(url, cfg);
    }

    public put<T>(url: string, body?: any, config?: any): Promise<T> {
        var cfg = Object.assign({}, config, {
            method: 'PUT',
            body: body
        });

        return this.request<T>(url, cfg);
    }

    public delete<T>(url: string, body?: any, config?: any): Promise<T> {
        var cfg = Object.assign({}, config, {
            method: 'DELETE',
            body: body
        });
        return this.request<T>(url, cfg);
    }
}