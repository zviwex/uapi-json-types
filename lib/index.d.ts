/// <reference path="./Services/Utils/UtilsService.d.ts" />
/// <reference path="./Services/Utils/UtilsErrors.d.ts" />
/// <reference path="./Services/Hotels/HotelsService.d.ts" />
/// <reference path="./Services/Hotels/HotelsErrors.d.ts" />
/// <reference path="./Services/Air/Air.d.ts" />
/// <reference path="./Services/Air/AirErrors.d.ts" />
/// <reference path="./Services/Terminal/Terminal.d.ts" />
/// <reference path="./Services/Terminal/TerminalErrors.d.ts" />
/// <reference path="./Request/RequestErrors.d.ts" />
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

