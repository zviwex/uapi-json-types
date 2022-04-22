declare module 'error-types' {
  export const ServiceError: any;
  export namespace commonErrors{
    export const RuntimeError: any;
    export const ValidationError: any;
    export const ParsingError: any;
    export const SoapError: any;
  }
}
