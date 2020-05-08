// generated by scripts/add-page.js
// @ts-ignore
import Doc, { frontmatter, toc } from "../docs/202005040322.mdx";
import history from "../gen/202005040322.history.json";
import { ItemLayout } from "mdxx-ssg-components";
import ssgConfig from "../mdxx-ssg.json";

export const config = {
  amp: true,
};

export default () => (
  <ItemLayout
    toc={toc}
    history={history}
    ssgConfig={ssgConfig}
    title={frontmatter.title}
  >
    <Doc amp />
  </ItemLayout>
);
