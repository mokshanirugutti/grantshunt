import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { fetchGrantById } from '@/hooks/getGrantById';
import { Button } from './ui/button';

const GrantCard: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the grant ID from the URL parameters
  const [grant, setGrant] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getGrant = async () => {
      try {
        if (id) {
          const data = await fetchGrantById(Number(id)); // Convert id to a number
          console.log(data)
          setGrant(data);
        }
      } catch (err) {
        setError('Failed to fetch grant data.');
      } finally {
        setLoading(false);
      }
    };

    getGrant();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const renderDetail = (label: string, value: string | number) => (
    <p className='text-lg font-semibold my-2'>
      <span className='text-gray-600'>{label}: </span>
      {value}
    </p>
  );

  return (
    <div className='pagePadding min-h-screen py-5'>
      <div className='md:max-w-3xl mx-auto shadow-lg rounded-lg p-6'>
        <Link 
        to='/search'
        >
        <Button variant="secondary">
            Back
        </Button>
        </Link>
        <h2 className='text-2xl font-semibold my-2'>
          <span className='text-gray-600'>Title: </span>
          {grant.title}
        </h2>
        {renderDetail('Description', grant.description)}
        {renderDetail('Amount', grant.amount)}
        {renderDetail('Funding Source', grant.funding_source)}
        {renderDetail('Eligibility Criteria', grant.eligibility_criteria)}
        {renderDetail('Start Date', grant.start_date)}
        {renderDetail('End Date', grant.end_date)}
        {renderDetail('Terms', grant.terms_of_contract)}
        {renderDetail('Status', grant.status)}
      </div>
    </div>
  );
};

export default GrantCard;