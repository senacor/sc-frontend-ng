import { OnInit, Component, Input } from "@angular/core";
import { ScorecardService } from '../../services/scorecard.service';
import { Sc } from '../../models/sc.model';

@Component({
    selector: 'app-buttons-below-sheet',
    template: `
        <div class="buttonsContainer">
            <button mat-button class="archiveButton" (click)="onArchiveClicked()">{{'scsheet.archive' | translate}}</button>
            <button mat-button class="saveButton" (click)="onSaveClicked()">{{'scsheet.save' | translate}}</button>
            <button mat-button class="publishButton" (click)="onPublishClicked()">{{'scsheet.publish' | translate}}</button>
            <button mat-button class="closeButton" (click)="onCloseClicked()">{{'scsheet.closeSc' | translate}}</button>
            <button mat-button class="downloadButton" (click)="onDownloadClicked()">
                <mat-icon>picture_as_pdf</mat-icon>
                {{'scsheet.downloadPdf' | translate}}
            </button>
        </div>
    `,
    styleUrls: ['./buttons-below-sheet.component.css']
  })
export class ButtonsBelowSheet implements OnInit {

    @Input() scorecard: Sc = {
        id: 1
    } 

    constructor(private scService: ScorecardService) {
    }
  
    ngOnInit(): void {
    }

    onArchiveClicked(): void {
        this.scService.archive(this.scorecard.id);
    }

    onSaveClicked(): void {
        this.scService.save(this.scorecard.id);
    }
    
    onPublishClicked(): void {
        this.scService.publish(this.scorecard.id);
    }
    
    onCloseClicked(): void {
        this.scService.close(this.scorecard.id);
    }

    onDownloadClicked(): void {
        this.scService.downloadPdf(this.scorecard.id);
    }
}