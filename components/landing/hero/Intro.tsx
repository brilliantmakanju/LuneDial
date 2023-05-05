import Container from "./text/Container";

const Intro = () => {
  return (
    <section
      className="flex relative justify-center pt-[150px] h-[92vh] text-yellow-400 lg:h-[87.5vh] 2xl:h-screen font-bold  w-screen "
      style={{
        backgroundImage: 'url("/wallpaperflare.com_wallpaper(107).jpg")',
      }}
    >
      <Container />
    </section>
  );
};

export default Intro;
