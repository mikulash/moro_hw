/* tslint:disable */
/* eslint-disable */
/**
 * Morosystems Todo API
 * A simple backend for todo app
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface CreateTask
 */
export interface CreateTask {
    /**
     * Content
     * @type {string}
     * @memberof CreateTask
     */
    'text': string;
}
/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * Identification
     * @type {string}
     * @memberof Task
     */
    'id': string;
    /**
     * Content
     * @type {string}
     * @memberof Task
     */
    'text': string;
    /**
     * Status
     * @type {boolean}
     * @memberof Task
     */
    'completed': boolean;
    /**
     * Date when task was created (Timestamp)
     * @type {number}
     * @memberof Task
     */
    'createdDate': number;
    /**
     * Date when task was completed (Timestamp)
     * @type {number}
     * @memberof Task
     */
    'completedDate'?: number;
}
/**
 * 
 * @export
 * @interface UpdateTask
 */
export interface UpdateTask {
    /**
     * Content
     * @type {string}
     * @memberof UpdateTask
     */
    'text': string;
}

/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns all completed tasks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksCompletedGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tasks/completed`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns all tasks. Slow service, around 3 seconds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Completes given task, then returns modified task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdCompletePost: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('tasksIdCompletePost', 'id', id)
            const localVarPath = `/tasks/{id}/complete`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes given task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdDelete: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('tasksIdDelete', 'id', id)
            const localVarPath = `/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Incompletes given task, then returns modified task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdIncompletePost: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('tasksIdIncompletePost', 'id', id)
            const localVarPath = `/tasks/{id}/incomplete`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates text of given task, then returns modified task
         * @param {string} id ID of task
         * @param {UpdateTask} updateTask text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdPost: async (id: string, updateTask: UpdateTask, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('tasksIdPost', 'id', id)
            // verify required parameter 'updateTask' is not null or undefined
            assertParamExists('tasksIdPost', 'updateTask', updateTask)
            const localVarPath = `/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateTask, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates task with given text, then returns created task
         * @param {CreateTask} createTask text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksPost: async (createTask: CreateTask, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTask' is not null or undefined
            assertParamExists('tasksPost', 'createTask', createTask)
            const localVarPath = `/tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTask, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TasksApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns all completed tasks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksCompletedGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Task>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksCompletedGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksCompletedGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Returns all tasks. Slow service, around 3 seconds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Task>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Completes given task, then returns modified task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksIdCompletePost(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksIdCompletePost(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksIdCompletePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Deletes given task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksIdDelete(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksIdDelete(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Incompletes given task, then returns modified task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksIdIncompletePost(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksIdIncompletePost(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksIdIncompletePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates text of given task, then returns modified task
         * @param {string} id ID of task
         * @param {UpdateTask} updateTask text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksIdPost(id: string, updateTask: UpdateTask, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksIdPost(id, updateTask, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksIdPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Creates task with given text, then returns created task
         * @param {CreateTask} createTask text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksPost(createTask: CreateTask, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tasksPost(createTask, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.tasksPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TasksApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns all completed tasks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksCompletedGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<Task>> {
            return localVarFp.tasksCompletedGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns all tasks. Slow service, around 3 seconds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<Task>> {
            return localVarFp.tasksGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Completes given task, then returns modified task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdCompletePost(id: string, options?: RawAxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.tasksIdCompletePost(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes given task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdDelete(id: string, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.tasksIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Incompletes given task, then returns modified task
         * @param {string} id ID of task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdIncompletePost(id: string, options?: RawAxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.tasksIdIncompletePost(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates text of given task, then returns modified task
         * @param {string} id ID of task
         * @param {UpdateTask} updateTask text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksIdPost(id: string, updateTask: UpdateTask, options?: RawAxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.tasksIdPost(id, updateTask, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates task with given text, then returns created task
         * @param {CreateTask} createTask text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksPost(createTask: CreateTask, options?: RawAxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.tasksPost(createTask, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI {
    /**
     * 
     * @summary Returns all completed tasks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksCompletedGet(options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksCompletedGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns all tasks. Slow service, around 3 seconds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksGet(options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Completes given task, then returns modified task
     * @param {string} id ID of task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksIdCompletePost(id: string, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksIdCompletePost(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes given task
     * @param {string} id ID of task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksIdDelete(id: string, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Incompletes given task, then returns modified task
     * @param {string} id ID of task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksIdIncompletePost(id: string, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksIdIncompletePost(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates text of given task, then returns modified task
     * @param {string} id ID of task
     * @param {UpdateTask} updateTask text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksIdPost(id: string, updateTask: UpdateTask, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksIdPost(id, updateTask, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates task with given text, then returns created task
     * @param {CreateTask} createTask text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksPost(createTask: CreateTask, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).tasksPost(createTask, options).then((request) => request(this.axios, this.basePath));
    }
}



