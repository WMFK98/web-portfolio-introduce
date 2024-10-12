export default function ContainerPage({ children, type, id }) {
  const style = type === "center" ? "items-center justify-center" : "";

  return (
    <div
      id={id}
      className={`flex max-h-max min-h-screen w-screen flex-col py-[100px] ${style} gap-[33px] px-[35px]`}
    >
      {children}
    </div>
  );
}
