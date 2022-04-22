/// <reference path="./UtilsService.d.ts" />
/// <reference path="./UtilsErrors.d.ts" />
/// <reference path="./HotelsService.d.ts" />
/// <reference path="./HotelsErrors.d.ts" />
/// <reference path="./Air.d.ts" />
/// <reference path="./AirErrors.d.ts" />
/// <reference path="./Terminal.d.ts" />
/// <reference path="./TerminalErrors.d.ts" />
/// <reference path="./RequestErrors.d.ts" />
/// <reference path="./error-codes.d.ts" />
/// <reference path="./error-types.d.ts" />

declare module 'uapi-json' {
    import { createUtilsService } from "UtilsService";
    import { createHotelService }  from "HotelsService";
    import { createAirService }  from "Air";
    import { createTerminalService }  from "Terminal";
    import { commonErrors }  from "error-types";
    import { requestErrors }  from "RequestErrors";
    import { airErrors }  from "AirErrors";
    import { hotelsErrors }  from "HotelsErrors";
    import { utilsErrors }  from "UtilsErrors";
    import { terminalErrors }  from "TerminalErrors";
    import { errorCodes }  from "error-codes";

    export namespace errors {
        export { commonErrors as Common };
        export { requestErrors as Request };
        export { airErrors as Air };
        export { hotelsErrors as Hotels };
        export { utilsErrors as Utils };
        export { terminalErrors as Terminal };
    }
    export { createUtilsService, createHotelService, createAirService, createTerminalService, errorCodes };
}

