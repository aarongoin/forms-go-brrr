import React from "react";

export function useFormRef(
  name: string
): React.MutableRefObject<HTMLFormElement | null> {
  const ref = React.useRef(window.document.forms.namedItem(name));
  React.useEffect(() => {
    if (!ref.current)
      setTimeout(
        () => (ref.current = window.document.forms.namedItem(name)),
        0
      );
  }, []);
  return ref;
}
