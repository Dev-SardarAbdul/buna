import React from "react";
import { PDFCardWrapper } from "./styled";
import Card from "react-bootstrap/Card";
import pdfImg from "../../assets/images/pdf.png";
import { Button, Dropdown, Space } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import dummyPdf from "../../assets/pdf/dummy.pdf";
import { useState } from "react";
import { Modal } from "antd";
import PDFModal from "../modal/pdfReaderModal";

function PdfCard({ index, item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <PDFCardWrapper>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={false}
        width={800}
      >
        <PDFModal />
      </Modal>
      <Card>
        <Dropdown menu={{ items }} trigger={"click"}>
          <BsThreeDotsVertical cursor="pointer" className="threeDots" />
        </Dropdown>
        <img className="img-fluid pdfImg" src={pdfImg} onClick={showModal} />
        <p className="imgText">Document 1</p>
      </Card>
    </PDFCardWrapper>
  );
}

export default PdfCard;
