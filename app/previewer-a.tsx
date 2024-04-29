// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import castle from "~/assets/castle.jpg?w=200;400;1200";

export default function PreviewerA() {
  return <pre>{JSON.stringify(castle, undefined, 2)}</pre>;
}
