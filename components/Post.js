import Link from 'next/link';
export default props => {
  return (
    <div>

        {props.post.map(val => (
            <Link href={`/post/${val.id}`} >
              <div onClick={()=>props.onhit(val.id)} key={val.id+val.title}>
                <h5>{val.title}</h5>
                <hr />
                {/* <p>{val.body}</p> */}
              </div>
            </Link>
        ))}
    </div>
  );
};
