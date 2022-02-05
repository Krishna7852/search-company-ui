import { useCallback, useState } from 'react';
import './App.scss';
import { companyService } from './services/Api';
import { CompanyDetails } from './models';
import Card from './components/Card/Card';
import List from './components/List/List';
import Search from './components/Search/Search';
/**
 * App - Base component for the RS assignment
 * @returns {ReactElement} AppComponent
 */
function App() {
  // State and setters for selected company
  const [selectedCompany, setSelectedCompany] = useState<CompanyDetails>();

  // State and setters for selected details
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails[]>([]);

  /**
   *
   * @param {string} query - The query search in input field.
   */
  const searchHandler = useCallback((query: string) => {
    const params = query ? query : 'a'; // Passing default value as "a" to display the default records
    companyService
      .getCompanyDetails(params)
      .then((res) => {
        setCompanyDetails(res.data);
      })
      .catch(() => {
        setCompanyDetails([]);
      });
  }, []);

  return (
    <div className='main-container'>
      {!!selectedCompany && <Card data={selectedCompany} />}
      <div className='main-container-list'>
        <Search
          placeholder='Search Here..'
          delay={400}
          onSearch={searchHandler}
        />
        {!!companyDetails.length ? (
          <List
            data={companyDetails}
            onSelect={(data) => setSelectedCompany(data)}
          />
        ) : (
          <div className='empty-state'>No Matching records found..☹️!!</div>
        )}
      </div>
    </div>
  );
}

export default App;
