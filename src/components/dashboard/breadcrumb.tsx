import { toSentenceCase } from '@/lib/utils';

interface BreadCrumbType {
  path: string;
}

const reformatPathIntoBreadCrumb = (path: string) => {
  const paths = path
    .slice(1)
    .split('/')
    .map((word, index) => {
      word = word.replace(/-/g, ' ');
      return toSentenceCase(word);
    });

  return paths.join(' / ');
};

const BreadCrumb = (props: BreadCrumbType) => {
  return <p className='my-2 text-md '>{reformatPathIntoBreadCrumb(props.path)}</p>;
};

export default BreadCrumb;
