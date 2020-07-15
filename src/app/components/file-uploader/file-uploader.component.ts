import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Globalclass } from 'src/app/core/models/globalclass';
import { ConfigFileuploader } from 'src/app/interface/config-fileuploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  //PARAMETROS DE ENTRADA
  @Input() url:string; //Recibe la url del api donde se enviará el archivo a subir
  @Input() formats: string; //Recibe un string con los formatos permitidos
  @Input() size: number; //Recibe el tamaño máximo de los archivos a subir

  //PARAMETROS DE RETORNO AL COMPONENTE PADRE
  @Output() getResponse = new EventEmitter<any>();

  //Configuración del angular fileupload
  Config: ConfigFileuploader = {
    multiple: false, //false: solo un archivo, true: varios archivos
    formatsAllowed: null,//formatos soportados
    maxSize: null, //tamaño del archivo a subir
    uploadAPI: {
      url: null,//url a donde se enviará el archivo
      method: 'POST',
      headers: {
      }
    },
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Seleccionar archivo',
      uploadBtn: 'Cargar',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Archivo cargado exitosamente',
      afterUploadMsg_error: 'Falla al cargar el archivo'
    }
  };

  constructor(private global:Globalclass) { }

  ngOnInit(): void {
    //Si se recibe una ruta
    if(this.url)
    {
      this.Config.uploadAPI.url = this.global.uri_api + this.url;
    }

    //si se reciben los formatos
    if(this.formats)
    {
      this.Config.formatsAllowed = this.formats;
    }

    //si se recibe el tamaño maximo de los archivos
    if(this.size)
    {
      this.Config.maxSize = this.size;
    }

  }

  DocUpload(element){
    this.getResponse.emit(element);
  }

}
