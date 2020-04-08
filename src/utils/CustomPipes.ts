import { Pipe, PipeTransform } from '@angular/core';
/*
* Maps general status to translation id
*/
@Pipe({name: 'mapGeneralStatus'})
export class MapGeneralStatusPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'INITIALIZATION':
        return 'sc.phase.preparation';
      case 'IN_PROGRESS':
        return 'sc.phase.inProgress';
      case 'READY_TO_CLOSE':
        return 'sc.phase.ready';
      case 'DONE':
        return 'sc.phase.closed';
      case 'ARCHIVED':
        return 'sc.phase.archived';
      default:
        return 'sc.phase.unknown';
    }
  }
}
