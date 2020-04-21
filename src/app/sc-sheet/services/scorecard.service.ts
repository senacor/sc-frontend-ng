import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ScorecardService {

    constructor(private http: HttpClient) { }

    archive(id: number): void {
        console.log('archive clicked');
        console.log('scorecard with id: ' + id + ' archived');
    }

    save(id: number): void{
        console.log('save clicked');
        console.log('scorecard with id: ' + id + ' saved');
    }

    publish(id: number): void {
        console.log('publish clicked');
        console.log('scorecard with id: ' + id + ' published');
    }

    close(id: number): void {
        console.log('close clicked');
        console.log('scorecard with id: ' + id + ' closed');
    }

    downloadPdf(id: number): void {
        console.log('download clicked');
        console.log('scorecard with id: ' + id + ' downloaded');
    }
}
