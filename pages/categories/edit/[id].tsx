import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CategoryEdit() {
  return <AntdEditInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  return {
    props: {
      ...translateProps,
    },
  };
};
