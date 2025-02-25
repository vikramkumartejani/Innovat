import { useEffect } from "react";

function useOnClickOutside(
  ref,
  handler,
  allowedClasses
) {
  useEffect(() => {
    const listener = (event) => {
      const target = event.target

      // If the ref element contains the target, do nothing.
      if (ref.current && ref.current.contains(target)) {
        return;
      }

      // Check globally: for each allowed class, find all elements with that class
      // and see if any of those elements contain the target.
      for (let i = 0; i < allowedClasses.length; i++) {
        const allowedClass = allowedClasses[i];
        const allowedElements = document.querySelectorAll(`.${allowedClass}`);
        for (let j = 0; j < allowedElements.length; j++) {
          if (allowedElements[j].contains(target)) {
            return;
          }
        }
      }

      // If the target is not inside the ref element and not inside any allowed element, call the handler.
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, allowedClasses]);
}

export default useOnClickOutside;
