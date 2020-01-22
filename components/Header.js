import Link from 'next/link';

export default () => {
  return (
    <div>
      <Link href="/">
        <a>
          <h3>Home</h3>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <h3>About</h3>
        </a>
      </Link>
    </div>
  );
};
