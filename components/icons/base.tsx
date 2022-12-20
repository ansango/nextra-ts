type IconProps = {
  pathProps?: React.SVGProps<SVGPathElement>;
};

export const BaseIcon = (props: IconProps) => {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" {...props.pathProps} />
    </svg>
  );
};
