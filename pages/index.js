import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Post from '../components/Post';
const Index = props => {
  const [val, setVal] = useState(1);

  return (
    <div>
      <p>Previously clicked Post:{val}</p>

      <Header />
      {props.post !== 'err' ? <Post post={props.post} onhit={setVal} /> : <h3>Errorrr!!</h3>}
    </div>
  );
};

Index.getInitialProps = async () => {
  return getPost(1);
};
const getPost = async id => {
  try {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
    return { post: post.data };
  } catch (err) {
    return { post: 'err' };
  }
};
export default Index;
