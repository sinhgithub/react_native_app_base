import { CALENDAR_WORK } from 'actionsType';

const initialState = {
  loading: false,
  calendarWork: {}
};

const calendarWork = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR_WORK.CALENDAR_WORK.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case CALENDAR_WORK.CALENDAR_WORK.SUCCESS: {
      const data = action.payload;
      const newData = {};
      data.forEach(item => {
        newData[item.job.id] = [];
      }, []);

      for (const k in newData) {
        data.forEach(item => {
          if (item.job.id.toString() === k.toString()) {
            newData[k].push(item);
          }
        });
      }

      return {
        ...state,
        loading: false,
        calendarWork: newData
      };
    }

    case CALENDAR_WORK.CALENDAR_WORK.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    case CALENDAR_WORK.UPDATE.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case CALENDAR_WORK.UPDATE.SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }

    case CALENDAR_WORK.UPDATE.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default calendarWork;
