export const hasClass = (elements, cName = '') => {
  if (!elements) return false;
  return elements.className && !!elements.className.match(new RegExp(`(\\s|^)${cName}(\\s|$)`));
};
export const addClass = (elements, cName) => {
  if (!elements) return false;
  if (!hasClass(elements, cName) && cName) {
    elements.className += ` ${cName}`;
  }
  return elements;
};
export const removeClass = (elements, cName) => {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(new RegExp(`(\\s|^)${cName}(\\s|$)`), '');
  }
  return elements;
};
