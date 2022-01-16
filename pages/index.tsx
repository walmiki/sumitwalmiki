import type { NextPage } from 'next';
import Container from '../components/Container';
import Image from 'next/image';
import cn from 'classnames';

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <div className="flex items-center">
              <hr className="w-14 mr-1 border-gray-700 dark:border-gray" />
              <p className="text-gray-600 dark:text-gray-400">Who is he?</p>
            </div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Sumit Walmiki
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Developer at{' '}
              <span className="font-semibold">Diginnovators</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-16">
              "A fresher with experience", this line says exactly who he is. He
              is a software developer who crafts beautiful web and apps.
            </p>

            <div
              className={cn(
                'w-[180px]',
                'transform hover:scale-[1.01] transition-all',
                'rounded-xl bg-gradient-to-r p-1',
                'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
              )}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                <div className="">Download Resume</div>
              </div>
            </div>
          </div>
          <div className="w-[80px] sm:w-[320px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Sumit Walmiki"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full filter"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
