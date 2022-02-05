import * as React from 'react';
import { CompanyDetails } from '../../models';
import './style.scss';
interface ICardProps {
  data: CompanyDetails;
}

/**
 *
 * @param {Object} data - The data containing the specific company information.
 * @returns {ReactElement} CardComponent
 */
const Card: React.FunctionComponent<ICardProps> = ({ data }) => {
  return (
    <div className='card-container'>
      <figure>
        <img className='logo' src={data?.logo} alt={data?.name} />
      </figure>
      <h3>{data?.name}</h3>
      <p className='domain'>{data?.domain}</p>
    </div>
  );
};

export default Card;
