import PageHead from '../PageHead';
import moment from 'moment';
import { Fragment, useEffect, useState } from 'react';

const StorageAccount = () => {
  const [date, setDate] = useState(moment().subtract(1, 'M'));

  const handleDateChanged = (param) => {
    if (param === '+') {
      setDate((prev) => prev.clone().add(1, 'M'));
    }
    if (param === '-') {
      setDate((prev) => prev.clone().subtract(1, 'M'));
    }
  };

  return (
    <>
      <PageHead date={date} handleDateChanged={handleDateChanged} />
    </>
  );
};

export default StorageAccount;
