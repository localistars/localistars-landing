import styled from 'styled-components';

const Select = styled.div.attrs((props) => ({
  className: 'o-select-box'
}))`
  position: relative;
  color: #333;
  cursor: default;

  .select-icon {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: 0.3rem;
    position: absolute;
    right: 10px;
    top: 14px;
    width: 0;
  }

  .select-icon.open {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .o-select-box--control .o-selected-value {
    line-height: 1.5;
    font-size: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: default;
    outline: none;
    padding: 8px 52px 8px 10px;
    transition: all 200ms ease;
    width: 100%;
  }

  .o-select-dropdown {
    display: none;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    padding-left: 0;
  }

  .o-select-dropdown.open {
    display: block;
  }

  .o-select-dropdown .o-select-dropdown--item {
    box-sizing: border-box;
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    display: block;
    padding: 8px 30px;
  }

  .o-select-dropdown .o-select-dropdown--item.selected,
  .o-select-dropdown .o-select-dropdown--item:hover {
    background-color: #f2f9fc;
    color: #333;
  }
`;

export default Select;
