import { useEffect, useState } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import builder from '@/lib/builder';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

export default function CatchAllPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const isPreviewing = useIsPreviewing();
  const location = useLocation();

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

      try {
        const page = await builder
          .get('page', {
            url: location.pathname,
          })
          .promise();

        if (page) {
          setContent(page);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching Builder content:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [location.pathname]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E4B8E]"></div>
      </div>
    );
  }

  // If no content found and not in preview mode, show 404
  if (notFound && !isPreviewing) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BuilderComponent model="page" content={content} />
      </main>
      <Footer />
    </div>
  );
}
