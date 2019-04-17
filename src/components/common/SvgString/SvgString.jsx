import React from 'react';
import classnames from 'classnames';

const createMarkup = (html) => ( {
  __html: html
} );

const SvgString = ({ string, fill, scale, className }) =>
  <svg
    className={classnames(className)}
    viewBox="0 0 200 200"
    width={`${scale * 200}px`}
    height={`${scale * 200}px`}
    fill={fill}
    dangerouslySetInnerHTML={createMarkup(string)}
  />;

SvgString.defaultProps = {
  scale: 1
};

export default SvgString;