interface IInfoProps {
  id: number;
  title: string;
}

interface IInfo {
  info: IInfoProps;
}
const Posts = ({ info }: IInfo) => {
  return (
    <div className="border border-gray-700 p-5 rounded-xl ">
      <h1>{info.id}</h1>
      <h1>{info.title}</h1>
    </div>
  );
};

export default Posts;
