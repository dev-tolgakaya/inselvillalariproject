/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import RigelPage from "../../rigel/RigelPage";

const Rigel = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA RIGEL",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Kalkan Kızıltaş'ta yer alan, çok özel bir lokasyonda, mavi ve yeşille bütünleşmiş, kendini gösteren, modern ve çarpıcı bir etki yaratan lüks bir villadır. Villamız, bütün bir yılın yorgunluğunu üzerinizden atmanız için kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize 'işte bu' dedirtecek bir tatil geçirtmek için; kapılarımızı açıyoruz…"
      />
      <RigelPage />
    </MainLayout>
  );
};

export default Rigel;
