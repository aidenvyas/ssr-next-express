import axios from 'axios';
import Header from '../../components/Header';

export default function GetById(props) {
  return (
    <div>
      <Header />
      {props.post !== 'err' ? props.post.title : 'ErrooooR!'}
    </div>
  );
}

GetById.getInitialProps = async ({query}) => {
  try {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    return { post: post.data };
  } catch (err) {
    // console.log(err);
    return { post: 'err' };
  }
};
