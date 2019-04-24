/**
 * Shelter API
 * A website which provides information about pets which are being sheltered and are available for adoption. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { HealthV1Results } from './healthV1Results';


export interface HealthV1 { 
    /**
     * The current aggregate status of the service.
     */
    status: HealthV1.StatusEnum;
    readonly results?: any;
}
export namespace HealthV1 {
    export type StatusEnum = 'Healthy' | 'Degraded' | 'Unhealthy';
    export const StatusEnum = {
        Healthy: 'Healthy' as StatusEnum,
        Degraded: 'Degraded' as StatusEnum,
        Unhealthy: 'Unhealthy' as StatusEnum
    };
}