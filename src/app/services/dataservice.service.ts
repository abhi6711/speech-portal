/**
 * Dataservice is used to share the data between different components
 */

/**
 * Import all the angular dependencies here
 */
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import * as constant from '../constants';

@Injectable()
export class DataService {
    speechDetailsObject = {};
    showSpeech = false;
    speechData = [{ 'id': 1, 'speechtitle': 'abhishek', 'speechtext': 'abhcd', 'author': 'gvh', 'keywords': 'ghvvgh', 'date': '26/06/2018' }, 
                   { 'id': 2, 'speechtitle': 'vrvwre', 'speechtext': 'vetrberb', 'author': 'Dvwvw', 'keywords': 'fwevwe', 'date': '26/06/2018' }, 
                   { 'id': 3, 'speechtitle': 'vrvwre', 'speechtext': 'vetrberb', 'author': 'Dvwvw', 'keywords': 'fwevwe', 'date': '26/06/2018' }];
    constructor() { }

    /**
     * This function will emit the data into speechData
     * @param allDetails : details of the submitted speech
     * @return void
     */
    public sendSpeechData(allDetails): void {
        this.speechData = allDetails;
    }

    /**
     * This function will return the value of speechData
     * @return EventEmitter<any>
     */
    public getSpeechData() {
        return this.speechData;
    }

    /**
     * This function takes the speech data and store that data 
     * @param speechDetails : constains details of speeches
     * @return void
     */
    public setViewSpeechData(speechDetails: object, show: boolean): void {
        this.showSpeech = show;
        this.speechDetailsObject = speechDetails;
    }

    /**
     * This function returns the stored view speech data
     */
    public getViewSpeechData() {
        return [this.speechDetailsObject, this.showSpeech];
    }

    /**
     * This function will update( delete/update ) the speech data
     * @param data 
     * @return void
     */
    public updateSpeech(data: object, operation: string): void {
        if (operation === 'delete') {
            //loop over the speechData
            for (let keys in this.speechData) {
                //taking out id of each object in speech Data
                let id = this.speechData[keys]['id']
                if (data['id'] == id) {
                    let index: number = this.speechData.findIndex(y => y['id'] == id);
                    this.speechData.splice(index,1)
                }
            }
        } else {
            //loop over the speechData
            for (let keys in this.speechData) {
                //taking out id of each object in speech Data
                let id = this.speechData[keys]['id']
                if (data['id'] == id) {
                    //finding the index of the desired id
                    let index: number = this.speechData.findIndex(y => y['id'] == id);
                    this.speechData[index][constant.AUTHORNAME] = data[constant.AUTHORNAME];
                    this.speechData[index][constant.SPEECHTEXT] = data[constant.SPEECHTEXT];
                    this.speechData[index][constant.SPEECHTITLE] = data[constant.SPEECHTITLE];
                    this.speechData[index][constant.KEYWORDS] = data[constant.KEYWORDS];
                    this.speechData[index][constant.DATE] = data[constant.DATE];
                }
            }
        }
    }
}