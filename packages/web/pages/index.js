import getString from "@toilcrew/common/main";

export default function Home() {
  const header = getString();
  return <h1>Working: {header}!</h1>;
}
