const Loading = () => {
  return (
    <section className="flex items-center h-screen font-bold gap-1 justify-center " >
      <div className="flex items-center mx-auto font-bold gap-1 justify-center rounded-full h-[200px] animate-spin w-[200px] " >
        <h3 className="text-[220px] overflow-hidden text-inherit " >{">"}</h3>
        <h3 className="text-[220px] overflow-hidden text-inherit  " >{"<"}</h3>
      </div>
    </section>
  );
};

export default Loading;
