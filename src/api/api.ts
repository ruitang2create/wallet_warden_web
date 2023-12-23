/* tslint:disable */
/* eslint-disable */
/**
 * Wallet Warden Server
 * Wallet Warden API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
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
 * @interface CreateIncomeSchema
 */
export interface CreateIncomeSchema {
    /**
     * 
     * @type {number}
     * @memberof CreateIncomeSchema
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof CreateIncomeSchema
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof CreateIncomeSchema
     */
    'income_type': string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateIncomeSchema
     */
    'is_regular': boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateIncomeSchema
     */
    'notes': string;
    /**
     * 
     * @type {string}
     * @memberof CreateIncomeSchema
     */
    'source': string;
    /**
     * 
     * @type {string}
     * @memberof CreateIncomeSchema
     */
    'transaction_time': string;
    /**
     * 
     * @type {string}
     * @memberof CreateIncomeSchema
     */
    'user_id': string;
}
/**
 * 
 * @export
 * @interface CreateSpendingSchema
 */
export interface CreateSpendingSchema {
    /**
     * 
     * @type {number}
     * @memberof CreateSpendingSchema
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof CreateSpendingSchema
     */
    'currency': string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSpendingSchema
     */
    'is_necessary': boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateSpendingSchema
     */
    'notes': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSpendingSchema
     */
    'recipient': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSpendingSchema
     */
    'spending_type': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSpendingSchema
     */
    'transaction_time': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSpendingSchema
     */
    'user_id': string;
}
/**
 * 
 * @export
 * @interface GetIncomeListSchema
 */
export interface GetIncomeListSchema {
    /**
     * 
     * @type {Array<GetIncomeSchema>}
     * @memberof GetIncomeListSchema
     */
    'incomes': Array<GetIncomeSchema>;
}
/**
 * 
 * @export
 * @interface GetIncomeSchema
 */
export interface GetIncomeSchema {
    /**
     * 
     * @type {number}
     * @memberof GetIncomeSchema
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'income_type': string;
    /**
     * 
     * @type {boolean}
     * @memberof GetIncomeSchema
     */
    'is_regular': boolean;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'notes': string;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'source': string;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'transaction_time': string;
    /**
     * 
     * @type {string}
     * @memberof GetIncomeSchema
     */
    'user_id': string;
}
/**
 * 
 * @export
 * @interface GetSpendingListSchema
 */
export interface GetSpendingListSchema {
    /**
     * 
     * @type {Array<GetSpendingSchema>}
     * @memberof GetSpendingListSchema
     */
    'spendings': Array<GetSpendingSchema>;
}
/**
 * 
 * @export
 * @interface GetSpendingSchema
 */
export interface GetSpendingSchema {
    /**
     * 
     * @type {number}
     * @memberof GetSpendingSchema
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof GetSpendingSchema
     */
    'is_necessary': boolean;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'notes': string;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'recipient': string;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'spending_type': string;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'transaction_time': string;
    /**
     * 
     * @type {string}
     * @memberof GetSpendingSchema
     */
    'user_id': string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    'loc': Array<ValidationErrorLocInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}
/**
 * 
 * @export
 * @interface ValidationErrorLocInner
 */
export interface ValidationErrorLocInner {
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Income
         * @param {CreateIncomeSchema} createIncomeSchema 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createIncomeIncomeUserPost: async (createIncomeSchema: CreateIncomeSchema, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createIncomeSchema' is not null or undefined
            assertParamExists('createIncomeIncomeUserPost', 'createIncomeSchema', createIncomeSchema)
            const localVarPath = `/income/user`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createIncomeSchema, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Spending
         * @param {CreateSpendingSchema} createSpendingSchema 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpendingSpendingUserPost: async (createSpendingSchema: CreateSpendingSchema, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createSpendingSchema' is not null or undefined
            assertParamExists('createSpendingSpendingUserPost', 'createSpendingSchema', createSpendingSchema)
            const localVarPath = `/spending/user`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createSpendingSchema, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Fetch All Incomes By User
         * @param {string} userId 
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllIncomesByUserIncomesUserGet: async (userId: string, skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('fetchAllIncomesByUserIncomesUserGet', 'userId', userId)
            const localVarPath = `/incomes/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
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
         * @summary Fetch All Incomes
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllIncomesIncomesGet: async (skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/incomes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
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
         * @summary Fetch All Spendings By User
         * @param {string} userId 
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllSpendingsByUserSpendingsUserGet: async (userId: string, skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('fetchAllSpendingsByUserSpendingsUserGet', 'userId', userId)
            const localVarPath = `/spendings/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
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
         * @summary Fetch All Spendings
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllSpendingsSpendingsGet: async (skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/spendings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Income
         * @param {CreateIncomeSchema} createIncomeSchema 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createIncomeIncomeUserPost(createIncomeSchema: CreateIncomeSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIncomeSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createIncomeIncomeUserPost(createIncomeSchema, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.createIncomeIncomeUserPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Create Spending
         * @param {CreateSpendingSchema} createSpendingSchema 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSpendingSpendingUserPost(createSpendingSchema: CreateSpendingSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSpendingSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSpendingSpendingUserPost(createSpendingSchema, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.createSpendingSpendingUserPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Fetch All Incomes By User
         * @param {string} userId 
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAllIncomesByUserIncomesUserGet(userId: string, skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIncomeListSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllIncomesByUserIncomesUserGet(userId, skip, limit, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.fetchAllIncomesByUserIncomesUserGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Fetch All Incomes
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAllIncomesIncomesGet(skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIncomeListSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllIncomesIncomesGet(skip, limit, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.fetchAllIncomesIncomesGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Fetch All Spendings By User
         * @param {string} userId 
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAllSpendingsByUserSpendingsUserGet(userId: string, skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSpendingListSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllSpendingsByUserSpendingsUserGet(userId, skip, limit, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.fetchAllSpendingsByUserSpendingsUserGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Fetch All Spendings
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAllSpendingsSpendingsGet(skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSpendingListSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllSpendingsSpendingsGet(skip, limit, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.fetchAllSpendingsSpendingsGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Income
         * @param {CreateIncomeSchema} createIncomeSchema 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createIncomeIncomeUserPost(createIncomeSchema: CreateIncomeSchema, options?: any): AxiosPromise<GetIncomeSchema> {
            return localVarFp.createIncomeIncomeUserPost(createIncomeSchema, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Spending
         * @param {CreateSpendingSchema} createSpendingSchema 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpendingSpendingUserPost(createSpendingSchema: CreateSpendingSchema, options?: any): AxiosPromise<GetSpendingSchema> {
            return localVarFp.createSpendingSpendingUserPost(createSpendingSchema, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch All Incomes By User
         * @param {string} userId 
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllIncomesByUserIncomesUserGet(userId: string, skip?: number, limit?: number, options?: any): AxiosPromise<GetIncomeListSchema> {
            return localVarFp.fetchAllIncomesByUserIncomesUserGet(userId, skip, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch All Incomes
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllIncomesIncomesGet(skip?: number, limit?: number, options?: any): AxiosPromise<GetIncomeListSchema> {
            return localVarFp.fetchAllIncomesIncomesGet(skip, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch All Spendings By User
         * @param {string} userId 
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllSpendingsByUserSpendingsUserGet(userId: string, skip?: number, limit?: number, options?: any): AxiosPromise<GetSpendingListSchema> {
            return localVarFp.fetchAllSpendingsByUserSpendingsUserGet(userId, skip, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch All Spendings
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllSpendingsSpendingsGet(skip?: number, limit?: number, options?: any): AxiosPromise<GetSpendingListSchema> {
            return localVarFp.fetchAllSpendingsSpendingsGet(skip, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Create Income
     * @param {CreateIncomeSchema} createIncomeSchema 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createIncomeIncomeUserPost(createIncomeSchema: CreateIncomeSchema, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createIncomeIncomeUserPost(createIncomeSchema, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Spending
     * @param {CreateSpendingSchema} createSpendingSchema 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createSpendingSpendingUserPost(createSpendingSchema: CreateSpendingSchema, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createSpendingSpendingUserPost(createSpendingSchema, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Fetch All Incomes By User
     * @param {string} userId 
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public fetchAllIncomesByUserIncomesUserGet(userId: string, skip?: number, limit?: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).fetchAllIncomesByUserIncomesUserGet(userId, skip, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Fetch All Incomes
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public fetchAllIncomesIncomesGet(skip?: number, limit?: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).fetchAllIncomesIncomesGet(skip, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Fetch All Spendings By User
     * @param {string} userId 
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public fetchAllSpendingsByUserSpendingsUserGet(userId: string, skip?: number, limit?: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).fetchAllSpendingsByUserSpendingsUserGet(userId, skip, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Fetch All Spendings
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public fetchAllSpendingsSpendingsGet(skip?: number, limit?: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).fetchAllSpendingsSpendingsGet(skip, limit, options).then((request) => request(this.axios, this.basePath));
    }
}



