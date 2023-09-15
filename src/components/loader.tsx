export const Loader = () => {
  return (
    <>
      <div className="w-full bg-primary-dark-cyan h-screen grid justify-items-center flex items-center">
        <div
          className="grid justify-items-center gap-4
         flex flex-col"
        >
          <span className="page-loader"></span>
          <span className="font-bold text-white">Carregando</span>
        </div>
      </div>
    </>
  );
};
