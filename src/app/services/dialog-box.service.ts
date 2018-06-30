import { Injectable, Component, asNativeElements, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import { DialogBoxComponent } from "../tabs/dialog-box/dialog-box.component";

@Injectable()
export class DialogBoxService {

    dialogRef: MatDialogRef<DialogBoxComponent>;

    constructor(public dialog: MatDialog, @Inject(DOCUMENT) private doc: any) {
    }

    /**
     * This function will take errorMsg and open that message in dialogbox by using dialogboxComponent.
     * @param errorMsg 
     * @return void
     */
    openErrorModal(errorMsg: string): void {
        this.dialogRef = this.dialog.open(DialogBoxComponent, { data: { message: errorMsg, heading: 'Error Message:', button: 'close' }, disableClose: true });
        this.dialogRef.componentInstance.showErrorMsg = true;
    }

    /**
     * This function will open a confirmation modal and allow user to either go to speech history 
     * or submit another speech.
     * @param successMsg
     * @param buttonOne
     * @param buttonTwo
     * @returns void
    */
    openConfirmationModal(successMsg: string, buttonOne: string, buttonTwo: string): void {
        this.dialogRef = this.dialog.open(DialogBoxComponent, { data: { paragraph: successMsg, buttonName1: buttonOne, buttonName2: buttonTwo }, disableClose: false });
        this.dialogRef.componentInstance.showConfirmMsg = true;
    }

    /**
     * This function will open a confirmation modal for delete and save a speech
     * @param successMsg 
     * @param buttonOne
     * @param buttonTwo
     * @returns void
    */
    openModal(successMsg: string, buttonOne: string, buttonTwo: string): void {
        this.dialogRef = this.dialog.open(DialogBoxComponent, { data: { paragraph: successMsg, buttonName1: buttonOne, buttonName2: buttonTwo }, disableClose: false });
        this.dialogRef.componentInstance.showDeleteMsg = true;
    }

    /**
     * This function will open a message dialog box modal
     * @param message 
     */
    openMsgModal(message: string) {
        this.dialogRef = this.dialog.open(DialogBoxComponent, { data: { message: message, heading: 'Message:', button: 'close' }, disableClose: true });
        this.dialogRef.componentInstance.showMsg = true;
    }
}