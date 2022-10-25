import React from "react";

import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const link = "/discover/" + title.toLowerCase();
  return (
    <div className="collection-preview">
      <Link className="link-url" to={link}>
        {" "}
        {title}{" "}
      </Link>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
