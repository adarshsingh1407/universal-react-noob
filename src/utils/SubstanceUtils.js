import { VISIBILITY_FILTERS } from '../actions/SubstanceActions';
import { MSG } from '../Messages';

export const getVisibilityFilterLabel = (filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_SOLID:
      return MSG.VISIBILITY_FILTERS.SHOW_SOLID
    case VISIBILITY_FILTERS.SHOW_LIQUID:
      return MSG.VISIBILITY_FILTERS.SHOW_LIQUID
    case VISIBILITY_FILTERS.SHOW_GAS:
      return MSG.VISIBILITY_FILTERS.SHOW_GAS
    default:
      return MSG.VISIBILITY_FILTERS.SHOW_ALL
  }
};

export const getSubstanceState = (temp) => {
  if (temp <= 0) {
    return MSG.STATES_OF_MATTER.SOLID
  } else if (temp > 0 && temp < 100) {
    return MSG.STATES_OF_MATTER.LIQUID
  } else {
    return MSG.STATES_OF_MATTER.GAS;
  }
};

export const getVisibleSubstances = (substances = [], filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_SOLID:
      return substances.filter(t => (t.currentTemp <= 0))
    case VISIBILITY_FILTERS.SHOW_LIQUID:
      return substances.filter(t => (t.currentTemp > 0 && t.currentTemp < 100))
    case VISIBILITY_FILTERS.SHOW_GAS:
      return substances.filter(t => (t.currentTemp > 100))
    default:
      return substances
  }
};
