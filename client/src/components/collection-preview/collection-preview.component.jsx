import React from "react";
import "./collection-preview.style.scss";
import { Link } from "react-router-dom";
import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection">
      <Link to={`/shop/${routeName}`}>
        <h1 className="collection__title">{title.toUpperCase()}</h1>
      </Link>
      <div className="collection__preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
