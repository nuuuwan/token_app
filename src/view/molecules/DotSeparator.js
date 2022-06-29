import AlignCenter from "../../view/atoms/AlignCenter";
import MiddleDot from "../../view/atoms/MiddleDot";

export default function DotSeparator({ children, sx }) {
  let displayChildren = [];
  for (let child of children) {
    if (!child) {
      continue;
    }
    if (displayChildren.length > 0) {
      displayChildren.push(<MiddleDot />);
    }
    displayChildren.push(child);
  }

  return (
    <AlignCenter>
      {displayChildren.map(function (child, iChild) {
        return <span key={"child-" + iChild}>{child}</span>;
      })}
    </AlignCenter>
  );
}
