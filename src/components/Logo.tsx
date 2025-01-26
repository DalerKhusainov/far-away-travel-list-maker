export default function Header() {
  return (
    <header className="flex gap-4 justify-center items-center bg-primary py-4">
      <span className="sm:text-[30px] text-[20px]">🌴</span>
      <h1
        style={{ wordSpacing: "30px" }}
        className="sm:text-[40px] text-[30px] font-monoton uppercase text-dark font-extrabold tracking-[-1px]"
      >
        far away
      </h1>
      <span className="sm:text-[30px] text-[20px]">💼</span>
    </header>
  );
}
