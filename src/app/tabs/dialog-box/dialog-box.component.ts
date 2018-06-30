/**
 * Import all the angular depencies here
 */
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';

/**
 * Import all the internal module here
 */
import { DialogBoxService } from '../../services/dialog-box.service';
import { Subscriber } from '../../services/subscriber.service';
import * as constants from '../../constants';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
    public showErrorMsg: boolean;
    public showConfirmMsg: boolean;
    public showDeleteMsg: boolean;
    public showMsg: boolean;

    constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router, private subscriber: Subscriber) { }

    /**
     * This function triggred when speech-history button is clicked and it routes
     * to speech-history page
     * @return void
     */
    public goToSpeechHistory(): void {
        this.router.navigate(['/speech-history']);
        this.subscriber.storeValueInObservable(2);
        this.dialogRef.close();
    }
}