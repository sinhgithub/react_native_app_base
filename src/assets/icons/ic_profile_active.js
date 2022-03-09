import * as React from 'react';
import Svg, { Image } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={310}
      height={310}
      viewBox="0 0 310 310"
      {...props}>
      <Image
        x={13}
        y={19}
        width={283}
        height={279}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAEXCAMAAACqMRBoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC1lBMVEXtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHyYAAACglOZQAAAA8HRSTlMAAhw+W2+DlqWwvcC3r6CPe2hSMhIkVIHb+vLOckU0derXm2APo9SMQQNds/mYQj2h9uKAHgts2P62ARmF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"
      />
    </Svg>
  );
}

export default SvgComponent;
