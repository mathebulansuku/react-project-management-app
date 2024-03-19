import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto "
      />
      <h2 className="text-xl font-bold text-stone-500 my-4"></h2>
      <p className="text-stone-400 mb-4"></p>
      <p mt-8>
        <button className=""></button>
      </p>
    </div>
  );
}
