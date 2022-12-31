import React from "react";
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="ervinarviandi/portfolio2023"
      repoId="R_kgDOIrqodA"
      category="Q&A"
      categoryId="DIC_kwDOIrqodM4CTT9f"
      mapping="specific"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}
