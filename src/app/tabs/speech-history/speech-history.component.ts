/******************************* Description of Component *********************************
This component will have the table in  which the all the data of the speech submitted by a
user. In the table we have View/Share button, whenever a button is clicked button component
is rendered and does the operation required to done on button.
************************************ END *************************************************/

/**
 * Import all the angular dependencies here
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell, LocalDataSource } from 'ng2-smart-table';

/**
 * Import all the internal dependencies here
 */
import * as constants from '../../constants';
import { DataService } from '../../services/dataservice.service';
import { ButtonViewComponent } from '../button-component/button.component'

@Component({
    selector: 'app-speech-history',
    templateUrl: './speech-history.component.html',
    styleUrls: ['./speech-history.component.scss']
})
export class SpeechHistoryComponent implements OnInit {
    speechData: any;
    source: LocalDataSource;
    loaded: boolean = false;
    //Initial number of items to be shown per page
    selectedPageSize = 5;
    pageSizeOptions = [
        { value: 5, viewValue: '5' },
        { value: 10, viewValue: '10' },
        { value: 20, viewValue: '20' },
        { value: 50, viewValue: '50' }
    ];
    settings = {
        columns: {
            id: {
                title: 'Serial No.',
                sort: true,
                width: '1%',
            },
            speechtitle: {
                title: 'Speech Title',
                sort: true,
                width: '1%',
            },
            date: {
                title: 'Submitted On',
                sort: false,
                width: '100px'
            },
            author: {
                title: 'Author Name',
                sort: true,
                width: '1%',
            },
            keywords: {
                title: 'Speech Keywords',
                sort: true,
                width: '100px'
            },
            speechtext: {
                title: 'View/Share Speech',
                type: 'custom',
                renderComponent: ButtonViewComponent,
                valuePrepareFunction: (value) => { return 'Output' },
                sort: false,
                width: '10%'
            }
        },
        hideSubHeader: true,
        actions: {
            add: false,
            edit: false,
            delete: false
        },
        pager: {
            display: true,
            perPage: this.selectedPageSize
        }
    };
    data: object[];

    constructor(private dataService: DataService) {
    }

    /** 
     * ngOnInit gets called whenever the page initializes. It call a function to get all the 
     * speech data
    */
    ngOnInit() {
        this.getAllSpeechDetails();
    }

    /**
     * This function will get all the speech details.
     * @return void
    */
    public getAllSpeechDetails(): void {
        this.speechData = this.dataService.getSpeechData()
        this.source = new LocalDataSource(this.speechData);
        this.loaded = true;
    }

    /**
     * This function gets called when user changes the number of jobs to be displayed per page
     * @param itemsPerPage: jobs to be shown on a page
     * @returns void
    */
    public loadItems(itemsPerPage: number): void {
        this.selectedPageSize = itemsPerPage;
        this.source.setPaging(1, this.selectedPageSize, true);
    }

    /**
     * The function is called when the user wishes to search for an entry in the table
     * @param  {string=''} query
     * @returns void
    */
    onSearch(query: string = ''): void {
        if (query != '') {
            this.source.setFilter([
                {
                    field: 'author',
                    search: query
                },
                {
                    field: 'speechtitle',
                    search: query
                },
                {
                    field: 'date',
                    search: query
                },
                {
                    field: 'keywords',
                    search: query
                },
            ], false);
        }
        else {
            this.source.reset(false);
            this.source.setSort([
                {
                    field: 'date',
                    direction: 'desc'
                }
            ]);
        }
    }
}