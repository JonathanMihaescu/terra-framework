import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import classNames from 'classnames/bind';
import styles from './TestMenu.module.scss';

const cx = classNames.bind(styles);

class DefaultMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.addMenuItems = this.addMenuItems.bind(this);
    this.removeMenuItems = this.removeMenuItems.bind(this);
    this.state = {
      open: false,
      items: [0],
    };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  addMenuItems() {
    this.setState(prevState => ({
      items: [...prevState.items, prevState.items.length],
    }));
  }

  removeMenuItems() {
    this.setState((prevState) => {
      const newItems = prevState.items.slice();
      newItems.pop();
      return { items: newItems };
    });
  }

  render() {
    return (
      <div className={cx('menu-wrapper')} ref={this.setButtonNode}>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          {
            this.state.items.map(item => (
              <Menu.Item key={item} text={`Menu Item ${item}`} id={`TestContent${item}`} />
            ))
          }
        </Menu>
        <Button id="default-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed />
        <br />
        <button type="button" id="add-button" onClick={this.addMenuItems}>
          Add Menu Item
        </button>
        <button type="button" id="remove-button" onClick={this.removeMenuItems}>
          Remove Menu Item
        </button>
      </div>
    );
  }
}

export default DefaultMenu;
