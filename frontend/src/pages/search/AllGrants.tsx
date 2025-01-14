import ErrorOccuredBox from '@/components/ErrorOccuredBox';
import GrantsCard from '@/components/GrantsCard';
import LoadingAnimation from '@/components/Loading';
import { fetchGrantsData } from '@/hooks/getAllGrants';
import React, { useEffect, useState } from 'react';

const AllGrants: React.FC = () => {
  const [grants, setGrants] = useState<any[]>([]); // State to store fetched grants
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchGrantsData();
      setGrants(data); // Set fetched data to state
    } catch (err) {
      console.error('Error fetching grants data:', err);
      setError('Failed to load grants data. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingAnimation/>
  }

  if (error) {
    return <ErrorOccuredBox/>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      {grants.map((grant) => (
        <GrantsCard
          key={grant.id} // Assuming `id` is a unique identifier in your grants data
          title={grant.title}
          deadline={grant.end_date} // Use appropriate field names from your API response
          description={grant.description}
        />
      ))}
    </div>
  );
};

export default AllGrants;
