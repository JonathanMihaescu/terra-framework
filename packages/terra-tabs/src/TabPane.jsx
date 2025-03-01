import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Tabs.module.scss';

const cx = classNamesBind.bind(styles);
const propTypes = {
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,

  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,

  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: PropTypes.node,

  /**
   * Content to be displayed when the tab is selected.
   */
  children: PropTypes.node,

  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,

  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   * If enabled, this prop will apply the `aria-selected` style to the pane.
   */
  isActive: PropTypes.bool,
  /**
   * If enabled, this prop will show the icon on the tab and also in the menu if pane is collapsed.
   */
  showIcon: PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  isActive: false,
  showIcon: false,
};

const TabPane = ({
  icon,
  label,
  customDisplay,
  children,
  isDisabled,
  isIconOnly,
  isActive,
  showIcon,
  ...customProps
}) => {
  const paneRef = React.useRef(null);
  const handleKeyDown = () => {
    paneRef.current.setAttribute('data-terra-tabs-show-focus-styles', 'true');
  };

  const handleMouseDown = (event) => {
    paneRef.current.setAttribute('data-terra-tabs-show-focus-styles', 'false');
    if (isDisabled) {
      event.preventDefault();
    }
  };

  const handleBlur = () => {
    paneRef.current.setAttribute('data-terra-tabs-show-focus-styles', `${!isDisabled}`);
  };

  const attributes = { ...customProps };
  const theme = React.useContext(ThemeContext);
  const paneClassNames = classNames(cx(
    'tab',
    { 'is-disabled': isDisabled },
    { 'is-icon-only': isIconOnly },
    { 'is-text-only': !icon },
    theme.className,
  ),
  attributes.className);

  if (isIconOnly) {
    attributes['aria-label'] = label;
  }
  attributes['aria-selected'] = isActive;
  attributes.tabIndex = isActive ? 0 : -1;
  attributes.onKeyDown = handleKeyDown;
  attributes.onMouseDown = handleMouseDown;
  attributes.onBlur = handleBlur;

  return (
    <div {...attributes} ref={paneRef} data-terra-tabs-show-focus-styles={!isDisabled} data-terra-tab-pane role="tab" className={paneClassNames}>
      {customDisplay}
      {customDisplay ? null : icon}
      {customDisplay || isIconOnly ? null : <span className={cx('label')}>{label}</span>}
    </div>
  );
};

TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

export default TabPane;
