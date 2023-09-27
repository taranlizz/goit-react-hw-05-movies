import { LoaderWrapper } from './Loader.styled';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PuffLoader color="#3d7bfb" />
    </LoaderWrapper>
  );
};

export default Loader;
