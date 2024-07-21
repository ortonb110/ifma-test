import { FiLoader } from 'react-icons/fi';

const LoadingCard = () => {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <FiLoader className="animate-spin text-[2rem] text-black/60 dark:text-white/60" />
    </div>
  );
};

export default LoadingCard;
