import React, { useState } from 'react';
import { CompanyDetails } from '../../models';
import ListItem from './ListItem';
import './style.scss';
interface IListProps {
  data: CompanyDetails[];
  onSelect: (details: CompanyDetails) => void;
}
/**
 *
 * @param {array} data - The data containing the list of company details.
 * @param {function} onSelect On Select company callback function
 * @returns {ReactElement} ListComponent
 */
const List: React.FunctionComponent<IListProps> = ({ data, onSelect }) => {
  const [seletedItem, setSeletedItem] = useState<CompanyDetails>();
  
  const selectHandler = (item: CompanyDetails): void => {
    setSeletedItem(item);
    onSelect(item);
  };
  return (
    <>
      <ul className='list-container'>
        {data.map((item) => (
          <li
            className={
              seletedItem?.domain === item.domain
                ? 'selected-item'
                : 'item'
            }
            key={`id-${Math.random().toString(16).slice(2)}`}
            onClick={() => selectHandler(item)}>
            <ListItem details={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(List);
