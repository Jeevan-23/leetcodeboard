import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
import { Suspense } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params?.slug} | Whiteboard`,
  };
};

const DynamicExcalidrawWrapper = dynamic(() => import('@/components/custom/excalidraw-wrapper'), {
  ssr: false, // Disable server-side rendering
  loading: () => <Loading />,
});

const ProblemPage = ({ params }: Props) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <DynamicExcalidrawWrapper />
      </Suspense>
    </>
  );
};

export default ProblemPage;
