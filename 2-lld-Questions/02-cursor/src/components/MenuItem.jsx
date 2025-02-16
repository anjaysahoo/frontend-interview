function MenuItem({ item }) {
  return (
    <button className="menu__item" onClick={item?.fn}>
      <span className="menu__item-text">{item?.label}</span>
      <span className="menu__item-shortcut">{item?.keys}</span>
    </button>
  );
}

export default MenuItem;
  