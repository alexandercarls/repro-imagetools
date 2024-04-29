// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import castle from "~/assets/castle.jpg?w=300;400;1200";

export default function PreviewerB() {
  return <pre>{JSON.stringify(castle, undefined, 2)}</pre>;
}
