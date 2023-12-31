interface IconProps {
  name: IconName;
  width: number;
  height: number;
}

/**
 * @example
 * <Icon name="close" width={10} height={10} />
 */
const Icon = ({ name, width, height }: IconProps) => {
  return (
    <svg
      style={{ pointerEvents: "none" }}
      width={width.toString()}
      height={height.toString()}
      stroke="none"
    >
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;

export type IconName =
  | "forward"
  | "share"
  | "navigation"
  | "instagram"
  | "copy"
  | "github";
