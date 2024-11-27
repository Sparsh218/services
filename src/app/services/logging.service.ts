import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',  // Makes the service available in the root injector
})
export class LoggingService {

    logMessage(message: string) {
        console.log(message);
    }

}