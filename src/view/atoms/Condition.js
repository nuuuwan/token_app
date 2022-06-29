export default function Condition({ condition, children }) {
  if (!condition) {
    return null;
  }
  return children;
}
