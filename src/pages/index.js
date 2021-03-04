import React from "react";
import ProfileList from "../components/ProfileList";
import Layout from "../templates/Layout";

export default function IndexPage() {
  return (
    <Layout>
      <ProfileList></ProfileList>
    </Layout>
  );
}
