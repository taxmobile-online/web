import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CloudPdfViewer from "@cloudpdf/viewer";

import { Wrapper } from "./style";

// Type defination
interface Props {}

// Component
const Read: React.FC<Props> = () => {
  // Ref
  const viewer = useRef<any>(null);

  // Hooks
  const params = useParams();
  const { id, token } = params;

  //   Effects
  useEffect(() => {
    if (id) {
      CloudPdfViewer(
        {
          documentId: id,
          darkMode: true,
          token: token,
        },
        viewer.current
      ).then((instance) => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  return <Wrapper ref={viewer}></Wrapper>;
};

export default Read;
