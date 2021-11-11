import React, {Component} from "react";
import styles from "./Burger.module.css";
import classNames from 'classnames';

class Burger extends Component {
  state = { isOpen: false};
  toggle = () => {
      this.setState(state => ({ isOpen: !state.isOpen }));
      this.props.handleMenu(!this.state.isOpen);
    };
      render() {
          return (
                    <div>
                <button onClick={this.toggle}
                className={classNames(this.state.isOpen ? (styles.isOpen):"", styles.burgerBtn)} type="button" aria-expanded={this.state.isOpen} aria-controls="menuWrapper" data-menu-button>
          <svg className={styles.burgerWrapper}>
                <use className={styles.burgerIcon} href="./images/icons/sprite.svg#icon-burger"></use>
                <use className={styles.burgerCloseIcon} href="./images/icons/sprite.svg#icon-burger-close"></use>
            </svg>
            </button>              
            </div>
                  );             
  }
     };
export default Burger;