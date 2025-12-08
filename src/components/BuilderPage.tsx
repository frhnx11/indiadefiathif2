import { useEffect, useState } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import builder from '@/lib/builder';
import Navigation from './Navigation';
import Footer from './Footer';

interface BuilderPageProps {
  path?: string;
}

export default function BuilderPage({ path }: BuilderPageProps) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    const fetchContent = async () => {
      const urlPath = path || window.location.pathname;

      try {
        const page = await builder
          .get('page', {
            url: urlPath,
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
  }, [path]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If no content found and not in preview mode, return null to let React Router handle 404
  if (notFound && !isPreviewing) {
    return null;
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
