import React, {
  useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '@edx/paragon';


export default function UserSearch({ userIdentifier, searchHandler }) {
  const searchRef = useRef();

  const submit = useCallback((event) => {
    searchHandler(searchRef.current.value);
    event.preventDefault();
    return false;
  });

  return (
    <section className="mb-3">
      <form className="form-inline">
        <label htmlFor="userIdentifier">Username or Email</label>
        <Input ref={searchRef} className="flex-grow-1 mr-1" name="userIdentifier" type="text" defaultValue={userIdentifier} />
        <Button type="submit" onClick={submit} className="btn-primary">Search</Button>
      </form>
    </section>
  );
}

UserSearch.propTypes = {
  userIdentifier: PropTypes.string,
  searchHandler: PropTypes.func.isRequired,
};

UserSearch.defaultProps = {
  userIdentifier: '',
};
