export class LogginService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}