import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class DialogService {
  public currentDialog: Dialog = Dialog.Map

  public showDialog(dialog: Dialog): void {
    this.currentDialog = dialog
  }

  public getDialog(): Dialog {
    return this.currentDialog
  }

  dialogs = Dialog
}

export enum Dialog {
  Map,
  Editor
}
