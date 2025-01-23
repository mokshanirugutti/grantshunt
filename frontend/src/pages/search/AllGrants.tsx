import React, { useEffect, useState } from "react";
import ErrorOccuredBox from "@/components/ErrorOccuredBox";
import GrantsCard from "@/components/GrantsCard";
import LoadingAnimation from "@/components/Loading";
import { fetchGrantsData } from "@/hooks/getAllGrants";

interface AllGrantsProps {
  searchQuery: string;
}

const AllGrants: React.FC<AllGrantsProps> = ({ searchQuery }) => {
  const [grants, setGrants] = useState<any[]>([]);
  const [filteredGrants, setFilteredGrants] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchGrantsData();
      setGrants(data);
      setFilteredGrants(data);
    } catch (err) {
      console.error("Error fetching grants data:", err);
      setError("Failed to load grants data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter grants based on the search query
  useEffect(() => {
    const filtered = grants.filter((grant) => {
      const query = searchQuery.toLowerCase();
      return (
        grant.title.toLowerCase().includes(query) ||
        grant.description.toLowerCase().includes(query) ||
        grant.funding_source.toLowerCase().includes(query)
      );
    });
    setFilteredGrants(filtered);
  }, [searchQuery, grants]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorOccuredBox />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      {filteredGrants.map((grant) => (
        <GrantsCard
          key={grant.id}
          title={grant.title}
          deadline={grant.end_date}
          description={grant.description}
        />
      ))}
    </div>
  );
};

export default AllGrants;
