//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.17.0.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import ApiClient from './ApiClient'; import api from './ApiInstance';import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class EsGestorClient extends ApiClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor() {

        super();

        this.instance = api.current;

        this.baseUrl = this.getBaseUrl();

    }

    getAll(ids: number[] | null | undefined , cancelToken?: CancelToken | undefined): Promise<VesGestor[]> {
        let url_ = this.baseUrl + "/esGestor?";
        if (ids !== undefined && ids !== null)
            ids && ids.forEach(item => { url_ += "ids=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: AxiosResponse): Promise<VesGestor[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(VesGestor.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<VesGestor[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<VesGestor[]>(null as any);
    }

    post(view: VesGestor , cancelToken?: CancelToken | undefined): Promise<VesGestor> {
        let url_ = this.baseUrl + "/esGestor";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(view);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: AxiosResponse): Promise<VesGestor> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = VesGestor.fromJS(resultData200);
            return Promise.resolve<VesGestor>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<VesGestor>(null as any);
    }

    get(id: number , cancelToken?: CancelToken | undefined): Promise<VesGestor> {
        let url_ = this.baseUrl + "/esGestor/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: AxiosResponse): Promise<VesGestor> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = VesGestor.fromJS(resultData200);
            return Promise.resolve<VesGestor>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<VesGestor>(null as any);
    }

    delete(id: number , cancelToken?: CancelToken | undefined): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/esGestor/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            responseType: "blob",
            method: "DELETE",
            url: url_,
            headers: {
                "Accept": "application/octet-stream"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDelete(_response);
        });
    }

    protected processDelete(response: AxiosResponse): Promise<FileResponse | null> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers["content-disposition"] : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return Promise.resolve({ fileName: fileName, status: status, data: new Blob([response.data], { type: response.headers["content-type"] }), headers: _headers });
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<FileResponse | null>(null as any);
    }
}

export class ValidaBDClient extends ApiClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor() {

        super();

        this.instance = api.current;

        this.baseUrl = this.getBaseUrl();

    }

    get(  cancelToken?: CancelToken | undefined): Promise<ValidaBD[]> {
        let url_ = this.baseUrl + "/ValidaBD";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: AxiosResponse): Promise<ValidaBD[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ValidaBD.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<ValidaBD[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<ValidaBD[]>(null as any);
    }
}

export class VesGestor implements IVesGestor {
    id!: number | undefined;
    eMail!: string | undefined;
    emUso!: boolean | undefined;
    nome!: string | undefined;
    papel!: string | undefined;

    constructor(data?: IVesGestor) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.eMail = _data["eMail"];
            this.emUso = _data["emUso"];
            this.nome = _data["nome"];
            this.papel = _data["papel"];
        }
    }

    static fromJS(data: any): VesGestor {
        data = typeof data === 'object' ? data : {};
        let result = new VesGestor();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["eMail"] = this.eMail;
        data["emUso"] = this.emUso;
        data["nome"] = this.nome;
        data["papel"] = this.papel;
        return data;
    }

    clone(): VesGestor {
        const json = this.toJSON();
        let result = new VesGestor();
        result.init(json);
        return result;
    }
}

export interface IVesGestor {
    id: number | undefined;
    eMail: string | undefined;
    emUso: boolean | undefined;
    nome: string | undefined;
    papel: string | undefined;
}

export class ValidaBD implements IValidaBD {
    tabela!: string | undefined;
    coluna!: string | undefined;
    tipoEF!: string | undefined;
    nulidadeEF!: boolean | undefined;
    tipoBD!: string | undefined;
    nulidadeBD!: boolean | undefined;
    erro!: string | undefined;
    sql!: string | undefined;
    tabelaInexistente!: boolean;
    colunaInexistente!: boolean;
    tipoIncompativel!: boolean;
    nulidadeIncompativel!: boolean;

    constructor(data?: IValidaBD) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.tabela = _data["tabela"];
            this.coluna = _data["coluna"];
            this.tipoEF = _data["tipoEF"];
            this.nulidadeEF = _data["nulidadeEF"];
            this.tipoBD = _data["tipoBD"];
            this.nulidadeBD = _data["nulidadeBD"];
            this.erro = _data["erro"];
            this.sql = _data["sql"];
            this.tabelaInexistente = _data["tabelaInexistente"];
            this.colunaInexistente = _data["colunaInexistente"];
            this.tipoIncompativel = _data["tipoIncompativel"];
            this.nulidadeIncompativel = _data["nulidadeIncompativel"];
        }
    }

    static fromJS(data: any): ValidaBD {
        data = typeof data === 'object' ? data : {};
        let result = new ValidaBD();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tabela"] = this.tabela;
        data["coluna"] = this.coluna;
        data["tipoEF"] = this.tipoEF;
        data["nulidadeEF"] = this.nulidadeEF;
        data["tipoBD"] = this.tipoBD;
        data["nulidadeBD"] = this.nulidadeBD;
        data["erro"] = this.erro;
        data["sql"] = this.sql;
        data["tabelaInexistente"] = this.tabelaInexistente;
        data["colunaInexistente"] = this.colunaInexistente;
        data["tipoIncompativel"] = this.tipoIncompativel;
        data["nulidadeIncompativel"] = this.nulidadeIncompativel;
        return data;
    }

    clone(): ValidaBD {
        const json = this.toJSON();
        let result = new ValidaBD();
        result.init(json);
        return result;
    }
}

export interface IValidaBD {
    tabela: string | undefined;
    coluna: string | undefined;
    tipoEF: string | undefined;
    nulidadeEF: boolean | undefined;
    tipoBD: string | undefined;
    nulidadeBD: boolean | undefined;
    erro: string | undefined;
    sql: string | undefined;
    tabelaInexistente: boolean;
    colunaInexistente: boolean;
    tipoIncompativel: boolean;
    nulidadeIncompativel: boolean;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}