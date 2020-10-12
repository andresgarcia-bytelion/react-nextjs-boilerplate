import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import OnResize from '@/hooks/on-resize';
import ChevronDown from '@/icons/chevron-down.svg';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Accordion = ({ actions, children, title }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  const accordionContentRef = useRef(null);

  OnResize(() => {
    if (accordionContentRef.current) {
      setHeight(accordionContentRef.current.clientHeight);
    }
  });

  return (
    <div className={styles.accordion}>
      <button
        className={cx({
          accordionTrigger: true,
          accordionTriggerActive: active,
        })}
        type="button"
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      >
        <h2 className={styles.accordionTriggerTitle}>{title}</h2>
        {actions && <span className={styles.accordionTriggerActions} />}
        <ChevronDown className={cx({
          accordionTriggerIcon: true,
          accordionTriggerIconActive: active,
        })}
        />
      </button>
      <div
        className={cx({
          accordionBody: true,
          accordionBodyActive: active,
        })}
        style={{
          height: active ? height : 0,
        }}
      >
        <div
          className={cx({
            accordionContent: true,
            accordionContentActive: active,
          })}
          ref={accordionContentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
Accordion.defaultProps = {
  actions: null,
};

export default Accordion;
