import { Pipe, PipeTransform } from '@angular/core';
import { GENERAL_STATUS, SC_STATUS, USER_SC_RELATION } from './Constants';

/*
* Maps general status to translation id
*/
@Pipe({ name: 'mapGeneralStatus' })
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

/*
* Maps general status and user relation to hint id
*/
@Pipe({ name: 'mapToHint' })
export class MapToHintPipe implements PipeTransform {
  transform(value: GENERAL_STATUS, userRelation: USER_SC_RELATION): string {
    if (value === GENERAL_STATUS.INITIALIZATION) {
      if (userRelation === USER_SC_RELATION.REVIEWER)
        return 'sc.statusStepper.init.reviewer.hint';
      if (userRelation === USER_SC_RELATION.OWNER) return 'sc.statusStepper.init.employee.hint';
      return 'sc.statusStepper.init.other.hint';
    }

    if (value === GENERAL_STATUS.IN_PROGRESS) {
      if (userRelation === USER_SC_RELATION.REVIEWER)
        return 'sc.statusStepper.progress.reviewer.hint';
      if (userRelation === USER_SC_RELATION.OWNER)
        return 'sc.statusStepper.progress.employee.hint';
      return 'sc.statusStepper.progress.other.hint';
    }

    if (value === GENERAL_STATUS.READY_TO_CLOSE) {
      return 'sc.statusStepper.ready';
    }

    if (value === GENERAL_STATUS.DONE) {
      return 'sc.statusStepper.closed';
    }
  }
}

/*
* determineGeneralStatus
*/
@Pipe({ name: 'determineGeneralStatus' })
export class DetermineGeneralStatusPipe implements PipeTransform {
  transform(sc: { statusSet: string[] }): GENERAL_STATUS {

    //TODO: place this somewhere else
    const isReady = sc => {
      const revData = sc.publishedReviewerData;
      if (sc.statusSet.includes(SC_STATUS.WITH_PR)) {
        return checkEvaluationsFilledWithPR(
          false,
          revData.dailyBusiness,
          revData.project,
          revData.serviceQuality,
          revData.skillsInTheFields,
          revData.impactOnTeam,
          revData.impactOnCompany
        );
      }

      if (sc.statusSet.includes(SC_STATUS.WITHOUT_PR)) {
        return checkEvaluationsFilledWithoutPR(
          false,
          revData.dailyBusiness,
          revData.project,
          revData.workEfficiency,
          revData.workQuality
        );
      }

      return false;
    };

    const checkEvaluationsFilledWithPR = (
      useWrappedValues,
      dailyBusiness,
      project,
      serviceQuality,
      skillsInTheFields,
      impactOnTeam,
      impactOnCompany
    ) => {
      return useWrappedValues
        ? dailyBusinessAndProjectEvaluated(dailyBusiness, project, true) &&
        serviceQuality.evaluation.value > 0 &&
        skillsInTheFields.evaluation.value > 0 &&
        impactOnTeam.evaluation.value > 0 &&
        impactOnCompany.evaluation.value > 0
        : dailyBusinessAndProjectEvaluated(dailyBusiness, project, false) &&
        serviceQuality.evaluation > 0 &&
        skillsInTheFields.evaluation > 0 &&
        impactOnTeam.evaluation > 0 &&
        impactOnCompany.evaluation > 0;
    };

    const checkEvaluationsFilledWithoutPR = (
      useWrappedValues,
      dailyBusiness,
      project,
      workEfficiency,
      workQuality
    ) => {
      return useWrappedValues
        ? dailyBusinessAndProjectEvaluated(dailyBusiness, project, true) &&
        workEfficiency.evaluation.value > 0 &&
        workQuality.evaluation.value > 0
        : dailyBusinessAndProjectEvaluated(dailyBusiness, project, false) &&
        workEfficiency.evaluation > 0 &&
        workQuality.evaluation > 0;
    };

    const dailyBusinessAndProjectEvaluated = (
      dailyBusiness,
      project,
      useWrappedValues
    ) => {
      const reduceFunction = (result, goal) => {
        if (useWrappedValues) {
          if (!(goal.evaluation.value > 0)) {
            result = false;
          }
          return result;
        } else {
          if (!(goal.evaluation > 0)) {
            result = false;
          }
          return result;
        }
      };

      return (
        dailyBusiness.reduce(reduceFunction, true) &&
        project.reduce(reduceFunction, true)
      );
    };

    if (!sc) {
      return;
    }

    //general status: ARCHIVED
    if (sc.statusSet.includes(SC_STATUS.ARCHIVED)) {
      return GENERAL_STATUS.ARCHIVED;
    }

    //general status: INITIALIZATION
    if (!sc.statusSet.length) {
      return GENERAL_STATUS.INITIALIZATION;
    }

    //general status: CLOSED
    if (sc.statusSet.includes(SC_STATUS.CLOSED)) {
      return GENERAL_STATUS.DONE;
    }

    //general status: READY
    if (
      (sc.statusSet.includes(SC_STATUS.WITHOUT_PR) ||
        sc.statusSet.includes(SC_STATUS.WITH_PR)) &&
      isReady(sc)
    ) {
      return GENERAL_STATUS.READY_TO_CLOSE;
    }

    //general status: IN PROGRESS
    if (!isReady(sc)) {
      return GENERAL_STATUS.IN_PROGRESS;
    }
  }
}
