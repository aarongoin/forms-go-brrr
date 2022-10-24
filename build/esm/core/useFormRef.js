import React from "react";
function useFormRef(name) {
  const ref = React.useRef(window.document.forms.namedItem(name));
  React.useEffect(() => {
    if (!ref.current)
      setTimeout(
        () => ref.current = window.document.forms.namedItem(name),
        0
      );
  }, []);
  return ref;
}
export {
  useFormRef
};
