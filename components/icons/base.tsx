type IconProps = {
  pathProps?: React.SVGProps<SVGPathElement>;
  className?: string;
};

export const BaseIcon = (props: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" className={props.className}>
      <path fill="currentColor" {...props.pathProps} />
    </svg>
  );
};
