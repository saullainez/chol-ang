export class Globalclass {
    public uri_api = 'http://localhost:8000/api/'; 
    public uri_web = 'http://localhost:8000/'; 
    public authUrl = 'http://localhost:8000/oauth/token';

    //SALG Laravel Passport
    public grant_type: 'password';
    public client_id: '2';
    public client_secret: '4eVnS5rRCp0IpiKsEloppD9GZrvH9EklOLyAth2C';

    //SALG variables para SnackComponent
    snackMsjSuccess = "|success";
    snackMsjError = "|error";
    snackMsjWarning = "|warning";

    snackSuccess = "success-snackbar";
    snackError = "error-snackbar";
    snackWarning = "warning-snackbar";

    snackDuration = 5000;

    getDragDropDesc(element){
        return element.id + ' - ' + element.sub_menu_desc
    }

    extractIds(element:string){
        return element.split("-")[0];
    }
}
