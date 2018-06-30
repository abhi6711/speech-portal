/**
 * Import all the angular dependencies here
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Import all the internal module dependencies here
 */
import * as constant from '../../constants';
import { DataService } from '../../services/dataservice.service';
import { DialogBoxService } from '../../services/dialog-box.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit-speech.component.html',
    styleUrls: ['./submit-speech.component.scss']
})

export class SubmitSpeechComponent {
    // setting current date
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());
    authorName: string;
    keyWords: string;
    speechText: string;
    speechName: string;
    speechData = {};
    speechDetails = [];
    id = 0;
    constructor(private dataService: DataService, private dailogService: DialogBoxService) {
    }

    /**
     * This function will validate the input fields. If the input field is empty
     * then it will call a function to show error messages
     * @return boolean
     */
    public validateInputFields(): boolean {
        if (this.speechName == undefined) {
            this.showErrorMessage(constant.SPEECHNAMEERRORMSG)
        } else if (this.speechText == undefined) {
            this.showErrorMessage(constant.SPEECHTEXTERRORMSG)
        } else if (this.authorName == undefined) {
            this.showErrorMessage(constant.AUTHORNAMEERRORMSG)
        } else if (this.keyWords == undefined) {
            this.showErrorMessage(constant.KEYWORDSERRORMSG)
        } else {
            return true;
        }
        return false;
    }

    /**
     * This function gets called when speech is submitted
     * @returns void
     */
    public submitSpeech(): void {
        if (this.validateInputFields()) {
            this.speechData[constant.ID] = ++this.id;
            this.speechData[constant.SPEECHTITLE] = this.speechName;
            this.speechData[constant.AUTHORNAME] = this.authorName;
            this.speechData[constant.KEYWORDS] = this.keyWords;
            this.speechData[constant.SPEECHTEXT] = this.speechText;
            this.speechData[constant.DATE] = this.date.value;
            this.speechDetails.push(this.speechData)
            this.dataService.sendSpeechData(this.speechDetails)
            this.dailogService.openConfirmationModal(constant.CONFIRMATIONMSG, constant.BACK, 'Speech-history')
        }
    }

    /**
     * This function will call dialog box service to show error message\
     * on dialog box
     * @param ErrroMsg : error message string
     * @returns void
     */
    public showErrorMessage(ErrroMsg): void {
        this.dailogService.openErrorModal(ErrroMsg);
    }
}
