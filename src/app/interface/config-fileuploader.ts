export interface ConfigFileuploader {
  multiple: boolean,
  formatsAllowed: string,
  maxSize: number,
  uploadAPI: {
    url: string,
    method: string,
    headers: {
    }
  },
  hideProgressBar: boolean,
  hideResetBtn: boolean,
  hideSelectBtn: boolean,
  replaceTexts: {
    selectFileBtn: string,
    uploadBtn: string,
    attachPinBtn: string,
    afterUploadMsg_success: string,
    afterUploadMsg_error: string
  }
}
