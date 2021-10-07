/**
 * Swagger Petstore
 * Swagger Petstore (ASP.NET Core 2.0)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { InlineResponse200 } from '../model/inlineResponse200';
import { Pet } from '../model/pet';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class PetApiService {
  protected basePath = 'https://localhost/v2';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional()
    @Inject(BASE_PATH)
    basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath + '/v2';
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
   * Add a new pet to the store
   *
   * @param body Pet object that needs to be added to the store
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addPet(body?: Pet, observe?: 'body', reportProgress?: boolean): Observable<Pet>;
  public addPet(
    body?: Pet,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Pet>>;
  public addPet(
    body?: Pet,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Pet>>;
  public addPet(
    body?: Pet,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['text/plain', 'application/json', 'text/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json-patch+json',
      'application/json',
      'text/json',
      'application/_*+json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<Pet>(`${this.basePath}/pets`, body, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Deletes a pet
   *
   * @param petId Pet id to delete
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deletePet(petId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public deletePet(
    petId: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public deletePet(
    petId: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public deletePet(
    petId: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (petId === null || petId === undefined) {
      throw new Error('Required parameter petId was null or undefined when calling deletePet.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.delete<any>(
      `${this.basePath}/pets/${encodeURIComponent(String(petId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Find pet by ID
   * Returns a pet when ID &amp;lt; 100.  ID &amp;gt; 100 or nonintegers will simulate API error conditions
   * @param petId ID of pet that needs to be fetched
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPetById(petId: number, observe?: 'body', reportProgress?: boolean): Observable<Pet>;
  public getPetById(
    petId: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Pet>>;
  public getPetById(
    petId: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Pet>>;
  public getPetById(
    petId: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (petId === null || petId === undefined) {
      throw new Error('Required parameter petId was null or undefined when calling getPetById.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['text/plain', 'application/json', 'text/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Pet>(`${this.basePath}/pets/${encodeURIComponent(String(petId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Get all pets of the store
   *
   * @param name Query all pets by name
   * @param status Query all pets by status
   * @param tags Query all pets by tag
   * @param offset offset for pagination
   * @param limit max number of records
   * @param sortBy name of the property to sort by
   * @param sortOrder sort order - asc or desc
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPets(
    name?: string,
    status?: Array<string>,
    tags?: Array<string>,
    offset?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<InlineResponse200>;
  public getPets(
    name?: string,
    status?: Array<string>,
    tags?: Array<string>,
    offset?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<InlineResponse200>>;
  public getPets(
    name?: string,
    status?: Array<string>,
    tags?: Array<string>,
    offset?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<InlineResponse200>>;
  public getPets(
    name?: string,
    status?: Array<string>,
    tags?: Array<string>,
    offset?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (name !== undefined) {
      queryParameters = queryParameters.set('name', <any>name);
    }
    if (status) {
      status.forEach(element => {
        queryParameters = queryParameters.append('status', <any>element);
      });
    }
    if (tags) {
      tags.forEach(element => {
        queryParameters = queryParameters.append('tags', <any>element);
      });
    }
    if (offset !== undefined) {
      queryParameters = queryParameters.set('offset', <any>offset);
    }
    if (limit !== undefined) {
      queryParameters = queryParameters.set('limit', <any>limit);
    }
    if (sortBy !== undefined) {
      queryParameters = queryParameters.set('sortBy', <any>sortBy);
    }
    if (sortOrder !== undefined) {
      queryParameters = queryParameters.set('sortOrder', <any>sortOrder);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['text/plain', 'application/json', 'text/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<InlineResponse200>(`${this.basePath}/pets`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Update an existing pet
   *
   * @param body Pet object that needs to be added to the store
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updatePet(body?: Pet, observe?: 'body', reportProgress?: boolean): Observable<Pet>;
  public updatePet(
    body?: Pet,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Pet>>;
  public updatePet(
    body?: Pet,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Pet>>;
  public updatePet(
    body?: Pet,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['text/plain', 'application/json', 'text/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json-patch+json',
      'application/json',
      'text/json',
      'application/_*+json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<Pet>(`${this.basePath}/pets`, body, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Updates a pet in the store with form data
   *
   * @param petId ID of pet that needs to be updated
   * @param name Updated name of the pet
   * @param status Updated status of the pet
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updatePetWithForm(
    petId: number,
    name: string,
    status: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public updatePetWithForm(
    petId: number,
    name: string,
    status: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public updatePetWithForm(
    petId: number,
    name: string,
    status: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public updatePetWithForm(
    petId: number,
    name: string,
    status: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (petId === null || petId === undefined) {
      throw new Error(
        'Required parameter petId was null or undefined when calling updatePetWithForm.'
      );
    }
    if (name === null || name === undefined) {
      throw new Error(
        'Required parameter name was null or undefined when calling updatePetWithForm.'
      );
    }
    if (status === null || status === undefined) {
      throw new Error(
        'Required parameter status was null or undefined when calling updatePetWithForm.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/x-www-form-urlencoded'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): HttpParams };
    const convertFormParamsToString = false;

    formParams = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (name !== undefined) {
      formParams = formParams.append('name', <any>name) || formParams;
    }
    if (status !== undefined) {
      formParams = formParams.append('status', <any>status) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/pets/${encodeURIComponent(String(petId))}`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
