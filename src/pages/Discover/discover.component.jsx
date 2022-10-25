import React from "react";

import { Route, Routes, useParams } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import CollectionRoute from "../collectionRoute/collectionRoute.component";

const DiscoverPage = () => {
  const collectionID = useParams();

  let searchParams = Object.values(collectionID)[0];
  console.log(searchParams);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CollectionsOverview />} />
        <Route path=":collectionID/*" element={<CollectionRoute />} />
      </Routes>
    </div>
  );
};

export default DiscoverPage;
