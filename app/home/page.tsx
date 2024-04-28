'use client'
import { useQuery } from '@apollo/client';
import AllPosts from './graphql/AllPosts.gql'
import { AllPostsQuery } from '@/graphql';

export default function HomePage() {
  const { loading, error, data } = useQuery<AllPostsQuery>(AllPosts);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
