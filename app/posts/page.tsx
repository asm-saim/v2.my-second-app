import Posts from "../components/Posts";

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((info) => (
        <Posts key={info.id} info={info}></Posts>
      ))}
    </div>
  );
};

export default PostPage;
