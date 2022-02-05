import * as React from 'react';
import { CompanyDetails } from '../../models';

interface IListItemProps {
  details?: CompanyDetails;
}

/**
 *
 * @param {Object} details - The details containing the specific company information.
 * @returns {ReactElement} ListItemComponent
 */

const ListItem: React.FunctionComponent<IListItemProps> = ({ details }) => {
  return (
    <div className='list-item'>
      <figure>
        <img className='logo' src={details?.logo} alt={details?.name} />
      </figure>
      <p>{details?.name}</p>
    </div>
  );
};

export default React.memo(ListItem);
