import { NextPage } from "next";
import { HomeLayout, ResponsiveNavbar } from "../../components";

const Articles: NextPage = () => {
  return (
    <HomeLayout>
      <ResponsiveNavbar />
      <div>Articles</div>
    </HomeLayout>
  );
};

export default Articles;
