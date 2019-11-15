import {useState, useCallback} from 'react';
import {patientData} from '../PatientData/patientData';

export const useSearch = () => {
  const [localState, setLocalState] = useState('');

  const filterItem = useCallback(() => {
    if (localState === '') {
      return patientData;
    }
    const filteredData = patientData.filter(item => {
      const lowerName = item.name.toLowerCase();
      const lowerSurname = item.surname.toLowerCase();
      const lowerState = localState.toLowerCase();
      const searchString = `${lowerName} ${lowerSurname} ${item.age}`;
      return searchString.indexOf(lowerState) > -1;
    });
    return filteredData;
  }, [localState]);

  return {setLocalState, filterItem};
};
