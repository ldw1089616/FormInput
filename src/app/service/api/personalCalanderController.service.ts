/**
 * Swagger First Rest Api æ–‡æ¡£
 * user æ¨¡å—apiæ–‡æ¡£
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Form1ReturnDto } from '../model/form1ReturnDto';
import { PersonalCalanderDto } from '../model/personalCalanderDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PersonalCalanderControllerService {

    protected basePath = 'https://localhost:7999';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * calInsert
     * 
     * @param dto dto
     * @param authorization ä»¤ç‰Œ
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public calInsertUsingPOST(dto: PersonalCalanderDto, authorization?: string, observe?: 'body', reportProgress?: boolean): Observable<Form1ReturnDto>;
    public calInsertUsingPOST(dto: PersonalCalanderDto, authorization?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Form1ReturnDto>>;
    public calInsertUsingPOST(dto: PersonalCalanderDto, authorization?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Form1ReturnDto>>;
    public calInsertUsingPOST(dto: PersonalCalanderDto, authorization?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling calInsertUsingPOST.');
        }


        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Form1ReturnDto>(`${this.basePath}/personal-calander/info-insert`,
            dto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * calUpdate
     * 
     * @param dto dto
     * @param authorization ä»¤ç‰Œ
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public calUpdateUsingPOST(dto: Array<PersonalCalanderDto>, authorization?: string, observe?: 'body', reportProgress?: boolean): Observable<Form1ReturnDto>;
    public calUpdateUsingPOST(dto: Array<PersonalCalanderDto>, authorization?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Form1ReturnDto>>;
    public calUpdateUsingPOST(dto: Array<PersonalCalanderDto>, authorization?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Form1ReturnDto>>;
    public calUpdateUsingPOST(dto: Array<PersonalCalanderDto>, authorization?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling calUpdateUsingPOST.');
        }


        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Form1ReturnDto>(`${this.basePath}/personal-calander/cal-update`,
            dto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * selectByUserId
     * 
     * @param userId userId
     * @param authorization ä»¤ç‰Œ
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public selectByUserIdUsingPOST(userId: number, authorization?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PersonalCalanderDto>>;
    public selectByUserIdUsingPOST(userId: number, authorization?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PersonalCalanderDto>>>;
    public selectByUserIdUsingPOST(userId: number, authorization?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PersonalCalanderDto>>>;
    public selectByUserIdUsingPOST(userId: number, authorization?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling selectByUserIdUsingPOST.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<Array<PersonalCalanderDto>>(`${this.basePath}/personal-calander/select-by-user`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
