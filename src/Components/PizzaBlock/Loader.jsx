import ContentLoader from "react-content-loader";
import React from "react";

const Loader = (props) => (
    <div className="pizza-block">
      <ContentLoader
          speed={2}
          width={280}
          height={457}
          viewBox="0 0 280 457"
          backgroundColor="#f5f5f5"
          foregroundColor="#c9c9c9"
          {...props}
      >
        <circle cx="138" cy="120" r="120" />
        <rect x="0" y="268" rx="5" ry="5" width="280" height="24" />
        <rect x="0" y="315" rx="5" ry="5" width="280" height="84" />
        <rect x="0" y="424" rx="0" ry="0" width="91" height="27" />
        <rect x="126" y="414" rx="25" ry="25" width="151" height="44" />
      </ContentLoader>
    </div>
)

export default Loader;