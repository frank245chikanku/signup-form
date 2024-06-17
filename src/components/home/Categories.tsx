import academic from "../../assets/education.png";

const Categories = () => {
  return (
    <section className="w-full flex flex-col min-h-screen justify-center items-center p-6">
      <p className="font-bold text-[50px]">Categories</p>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-4">
        <div className="w-full shadow shadow-black p-4 rounded-sm flex flex-col justify-center items-center">
          <img className="h-20 w-20" src={academic} alt="academic" />
          <p className="mt-4 font-bold text-slate-900 text-lg">
            Academic Integrity
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
