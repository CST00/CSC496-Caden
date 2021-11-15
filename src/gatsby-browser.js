export function wrapPageElement({ element, props }) {
   return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
  }