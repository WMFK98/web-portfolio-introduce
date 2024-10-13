export default function ContainerPage({ children, type, id, ref }) {
  let style = "";
  if (type === "center")
    style = "items-center  lg:justify-between justify-center ";

  return (
    <div
      id={id}
      className={`flex max-h-max min-h-screen w-screen flex-col py-[100px] lg:flex-row ${style} gap-[33px] overflow-x-scroll px-[35px]`}
      ref={ref}
    >
      <div className="hidden w-[20%] lg:block"></div>
      {children}
    </div>
  );
}
